import type { Skill, Routine, RoutineSet, RawSkillData } from "../types/types";
import { InputType, Shape, Direction, Event } from "../types/enums";
import { getInputType } from "../functions/util/getInputType";

import SkillBloat from "../bloat/calc";
import namedRoutines from "../bloat/namedRoutines.json";
import skills_dmt from "../bloat/skills_dmt.json";

export default class skillDB {
  // data import from file
  static data: RawSkillData = [];
  // cache for objects
  static cache: Map<string, Skill>;

  constructor() {
    // initialize the cache map
    skillDB.cache = new Map<string, Skill>();
    // load in the data here
  }

  getInfo(input: string, event: Event) {
    input = input.trim();
    // TODO: if abstracted the input splitting, call that function
    const inputType = getInputType(input);
    switch (inputType) {
      case InputType.Skill:
        return this.generateSkill(input, event);
      case InputType.Routine:
        return this.generateRoutine(input.split(" "), event);
      case InputType.RoutineSet:
        return this.generateRoutineSet(
          input.split(",").map((el) => el.split(" ")),
          event
        );
    }
  }

  generateSkill(input: string, event: Event = Event.DoubleMini): Skill {
    // TODO: re-implement this method so that it refers to the raw data
    let tumInput = input;
    // guard statement for tumbling FIG format
    if (event === Event.Tumbling) {
      const flips = (input.replaceAll(".", "").length - 1) * 4;
      if (input.includes(".")) {
        input.replaceAll(".", "");
        input = `.${flips}${input}`;
      } else {
        input = `${flips}${input}`;
      }
    } else {
      // remove the first digit(s) that denote the number of flips
      // but not the digits after that denote when the twists are
      if (input.length === 3 || input.length === 4) {
        tumInput = input.slice(1);
      } else {
        tumInput = input.slice(2);
      }
    }

    // return the skill from the cache if it is there
    if (skillDB.cache.has(input)) {
      // because of the check in the guard statement, we know the value is a skill
      return skillDB.cache.get(input) as Skill;
    }

    const triSkill = new SkillBloat(input, "TRI");
    const dmtSkill = new SkillBloat(input, "DMT");
    const tumSkill = new SkillBloat(tumInput, "TUM");

    const skillFromInput = {
      name: triSkill.name,

      trampolineDD: triSkill.DD,
      doubleMiniDD: dmtSkill.DD,
      tumblingDD: tumSkill.DD,

      FIG: input,
      // this is flat out wrong, but TODO implement a function for getting the tumbling string from the regular one
      FIGTumbling: input,

      // absolutely unholy
      // when I correctly implement the DB, the enum will be used automatically
      // TODO: write a function for shape string to enum
      shape:
        triSkill.shape === "o"
          ? Shape.Tuck
          : triSkill.shape === "<"
          ? Shape.Pike
          : triSkill.shape === "/"
          ? Shape.Layout
          : Shape.NotApplicable,
      flips: triSkill.quarterFlips / 4,
      twists: triSkill.twistsTotal / 2,

      direction: triSkill.backward ? Direction.Backward : Direction.Forward,
      blind: triSkill.getBlindness() ? true : false,
    };

    // add the skill to the cache
    skillDB.cache.set(input, skillFromInput);

    return skillFromInput;
  }

  generateRoutine(input: string[], event: Event = Event.DoubleMini): Routine {
    // call generate skill on all the skills
    // compile the following information
    // total dd, total flips, total twists
    // generate a name using the generate name functions to be implemented later

    const skills: Skill[] = input.map((el) => this.generateSkill(el, event));

    return {
      // TODO: use the naming function for this
      name: skills.map((el) => el.name).join(" "),

      trampolineDD: skills.map((el) => el.trampolineDD).reduce((a, b) => a + b),
      doubleMiniDD: skills.map((el) => el.doubleMiniDD).reduce((a, b) => a + b),
      tumblingDD: skills.map((el) => el.tumblingDD).reduce((a, b) => a + b),

      totalTwists: skills.map((el) => el.twists).reduce((a, b) => a + b),
      totalFlips: skills.map((el) => el.flips).reduce((a, b) => a + b),

      numSkills: skills.length,
      skills: skills,
    };
  }

  generateRoutineSet(input: string[][], event: Event): RoutineSet {
    const routines: Routine[] = input.map((arr) =>
      this.generateRoutine(arr, event)
    );

    return {
      totalTrampolineDD: routines
        .map((routine) => routine.trampolineDD)
        .reduce((a, b) => a + b),
      totalDoubleMiniDD: routines
        .map((routine) => routine.doubleMiniDD)
        .reduce((a, b) => a + b),
      totalTumblingDD: routines
        .map((routine) => routine.tumblingDD)
        .reduce((a, b) => a + b),

      averageTrampolineDD:
        routines
          .map((routine) => routine.trampolineDD)
          .reduce((a, b) => a + b) / routines.length,
      averageDoubleMiniDD:
        routines
          .map((routine) => routine.doubleMiniDD)
          .reduce((a, b) => a + b) / routines.length,
      averageTumblingDD:
        routines.map((routine) => routine.tumblingDD).reduce((a, b) => a + b) /
        routines.length,

      numRoutines: routines.length,
      routines: routines,
    };
  }

  getNamedRoutines(input: string, event: Event) {
    switch (event) {
      case Event.DoubleMini:
        return namedRoutines.filter((el) => el.skills.includes(input));
      default:
        return [];
    }
  }

  // finds every skill that has the same DD as the input
  // depends on the event

  getSkillsByDD(dd: number, event: Event) {
    switch (event) {
      case Event.DoubleMini:
        return skills_dmt.filter((el) => el.dd === dd);
      default:
        return null;
    }
  }

  // finds every possible routine that has the same dd as the input
  // routines are formed by two skills: one that is forwards (and NOT blind), then a backwards one that may be blind or not
  // loop through all forward skills: nested: backwards, see if their sum is the target dd
  // depends on the event

  // really gross!!

  getRoutinesByDD(
    dd: number,
    event: Event
  ): {
    name: string;
    skills: string[];
  }[] {
    switch (event) {
      case Event.DoubleMini:
        const forwardSkills = skills_dmt.filter(
          (el) =>
            !el.blind &&
            el.direction === "forward" &&
            el.dominant &&
            el.type === "regular"
        );

        const backwardSkills = skills_dmt.filter(
          (el) =>
            el.direction === "backward" && el.dominant && el.type === "regular"
        );

        let result: {
          name: string;
          skills: string[];
          ddDifference?: number;
        }[] = [];

        forwardSkills.forEach((forwardSkill) => {
          backwardSkills.forEach((backwardSkill) => {
            if (forwardSkill.dd + backwardSkill.dd === dd) {
              result.push({
                name: `${forwardSkill.name} ${backwardSkill.name}`,
                skills: [forwardSkill.FIGString, backwardSkill.FIGString],
                ddDifference: Math.abs(forwardSkill.dd - backwardSkill.dd),
              });
            }
          });
        });
        // sort by dd difference low to high
        return result
          .sort(
            (a, b) => (a.ddDifference as number) - (b.ddDifference as number)
          )
          .map((el) => {
            return {
              name: el.name,
              skills: el.skills,
            };
          });

      default:
        return [];
    }
  }
}
