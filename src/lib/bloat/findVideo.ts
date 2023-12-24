import worlds_2022_dmt from "./Worlds_2022_DMT_routines.json";
import { Event } from "$lib/types/enums";
import type { RoutineVideo } from "$lib/types/types";

export function findVideoSkill(input: String, event: Event): RoutineVideo[] {
  if (event === Event.DoubleMini) {
    return worlds_2022_dmt.filter((el) => el.skills.includes(input.trim()));
  }
  return [];
}

export function findVideoRoutine(input: String, event: Event): RoutineVideo[] {
  if (event === Event.DoubleMini) {
    return worlds_2022_dmt.filter((el) =>
      el.skills.join(" ").includes(input.trim())
    );
  }
  return [];
}

export function findVideoRoutineSet(
  input: String,
  event: Event
): RoutineVideo[] {
  return [];
}
