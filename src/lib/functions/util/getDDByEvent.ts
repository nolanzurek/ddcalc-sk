import { Event } from "$lib/types/enums";
import type { Skill, Routine } from "$lib/types/types";

export default function getDDByEvent(skill: Skill | Routine, event: Event) {
  switch (event) {
    case Event.Trampoline:
      return skill.trampolineDD;
    case Event.DoubleMini:
      return skill.doubleMiniDD;
    case Event.Tumbling:
      return skill.tumblingDD;
  }
}
