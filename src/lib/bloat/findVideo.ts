import dmt_data from "./DMT_RoutineData.json";
import training_dmt from "./training_dmt.json";
import { Event, Direction } from "$lib/types/enums";
import type { RoutineVideo, SkillVideo } from "$lib/types/types";

export function findVideoSkill(
  input: String,
  event: Event,
  direction: Direction
): SkillVideo[] {
  if (event === Event.DoubleMini) {
    return training_dmt.filter(
      (el) => el.skill === input.trim() && el.direction === direction
    );
  }
  return [];
}

export function findVideoRoutine(input: String, event: Event): RoutineVideo[] {
  if (event === Event.DoubleMini) {
    return dmt_data
      .filter((el) => el.skills.join(" ").includes(input.trim()))
      .sort((a, b) => parseInt(b.score) - parseInt(a.score));
  }
  return [];
}

export function findVideoRoutineSet(
  input: String,
  event: Event
): RoutineVideo[] {
  return [];
}
