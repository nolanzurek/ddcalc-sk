import { Event } from "$lib/types/enums";
import type { Skill, Routine } from "$lib/types/types";

export default function getDDByEvent(skill: Skill | Routine, event: Event) {
  switch (event) {
    case Event.Trampoline:
      return skill.DD.TRI;
    case Event.DoubleMini:
      return skill.DD.DMT;
    case Event.Tumbling:
      return skill.DD.TUM;
  }
}
