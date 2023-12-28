import type { Skill, Routine, RoutineSet } from "../types/types";
import { InputType, Shape, Direction, Event } from "../types/enums";
import { getInputType } from "../functions/util/getInputType";

import SkillBloat from "../bloat/calc";
import namedRoutines from "../bloat/namedRoutines.json";
import skills from "../bloat/skills.json";

export default class skillDB {
  // data import from file
  // take skills and all of the "shape" fields should be converted to enums
  static data: Skill[] = skills.map((el) => {
    return {
      ...el,
      shape:
        el.shape === "o"
          ? Shape.Tuck
          : el.shape === "<"
          ? Shape.Pike
          : el.shape === "/"
          ? Shape.Layout
          : Shape.NotApplicable,
      direction:
        el.direction === "backward" ? Direction.Backward : Direction.Forward,
    };
  });
  // cache for objects
  // is this necessary? doesn't the browser cache the objects?
  // THIS is why I took cmput 229
  static cache: Map<string, Skill>;

  constructor() {
    // initialize the cache map
    skillDB.cache = new Map<string, Skill>();
    // load in the data here
  }

  getInfo(
    input: string,
    event: Event,
    direction: Direction | undefined = undefined
  ) {
    input = input.trim();
    // TODO: if abstracted the input splitting, call that function
    const inputType = getInputType(input);
    switch (inputType) {
      case InputType.Skill:
        return this.generateSkill(input, event, direction);
      case InputType.Routine:
        return this.generateRoutine(input.split(" "), event);
      case InputType.RoutineSet:
        return this.generateRoutineSet(
          input.split(",").map((el) => el.split(" ")),
          event
        );
    }
  }

  generateSkill(
    input: string,
    event: Event = Event.DoubleMini,
    direction: Direction | undefined = undefined
  ): Skill {
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

    // if the skill is a named skill (which is most likely is), retrieve it from the "database"
    const namedSkills = skillDB.data.filter((el) => el.FIG === input);

    if (namedSkills.length === 1) {
      return namedSkills[0];
    }

    if (namedSkills.length === 2) {
      if (direction === undefined) {
        return namedSkills[0];
      }
      return namedSkills.find((el) => el.direction === direction) as Skill;
    }

    // otherwise, we must calculate the skill manually using the legacy calc.js code

    const triSkill = new SkillBloat(input, "TRI");
    const dmtSkill = new SkillBloat(input, "DMT");
    const tumSkill = new SkillBloat(tumInput, "TUM");

    const skillFromInput = {
      name: triSkill.name,

      DD: {
        TRI: triSkill.DD,
        DMT: dmtSkill.DD,
        TUM: tumSkill.DD,
      },

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

      dominant: false,
      normal: false,
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

      DD: {
        TRI: skills.map((el) => el.DD.TRI).reduce((a, b) => a + b),
        DMT: skills.map((el) => el.DD.DMT).reduce((a, b) => a + b),
        TUM: skills.map((el) => el.DD.TUM).reduce((a, b) => a + b),
      },

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
      totalDD: {
        TRI: routines.map((routine) => routine.DD.TRI).reduce((a, b) => a + b),
        DMT: routines.map((routine) => routine.DD.DMT).reduce((a, b) => a + b),
        TUM: routines.map((routine) => routine.DD.TUM).reduce((a, b) => a + b),
      },

      averageDD: {
        TRI:
          routines.map((routine) => routine.DD.TRI).reduce((a, b) => a + b) /
          routines.length,
        DMT:
          routines.map((routine) => routine.DD.DMT).reduce((a, b) => a + b) /
          routines.length,
        TUM:
          routines.map((routine) => routine.DD.TUM).reduce((a, b) => a + b) /
          routines.length,
      },

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
    return skillDB.data.filter((el) => el.DD[event] === dd);
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
    const forwardSkills = skillDB.data.filter(
      (el) => !el.blind && el.direction === Direction.Forward && el.dominant
    );

    const backwardSkills = skillDB.data.filter(
      (el) => el.direction === Direction.Backward && el.dominant
    );

    let result: {
      name: string;
      skills: string[];
      ddDifference?: number;
    }[] = [];

    forwardSkills.forEach((forwardSkill) => {
      backwardSkills.forEach((backwardSkill) => {
        if (forwardSkill.DD[event] + backwardSkill.DD[event] === dd) {
          result.push({
            name: `${forwardSkill.name} ${backwardSkill.name}`,
            skills: [forwardSkill.FIG, backwardSkill.FIG],
            ddDifference: Math.abs(
              forwardSkill.DD[event] - backwardSkill.DD[event]
            ),
          });
        }
      });
    });
    // sort by dd difference low to high
    return result
      .sort((a, b) => (a.ddDifference as number) - (b.ddDifference as number))
      .map((el) => {
        return {
          name: el.name,
          skills: el.skills,
        };
      });
  }
}
