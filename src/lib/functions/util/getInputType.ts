import { InputType } from "../../types/enums";

export function getInputType(input: string): InputType {
  input = input.trim();
  if (input.includes(",")) {
    return InputType.RoutineSet;
  } else if (input.includes(" ")) {
    return InputType.Routine;
  } else {
    return InputType.Skill;
  }
}
