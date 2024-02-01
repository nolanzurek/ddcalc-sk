import { Event } from "$lib/types/enums";

export function eventEnumToText(event: Event | undefined) {
  switch (event) {
    case Event.Trampoline:
      return "Trampoline";
    case Event.DoubleMini:
      return "Double Mini";
    case Event.Tumbling:
      return "Tumbling";
    default:
      return "";
  }
}
