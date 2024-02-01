import type { PageLoad } from "./$types";
import { Direction } from "$lib/types/enums";

export const load: PageLoad = ({ params }) => {
  // TODO: using a slash on the straight skills leads to routing
  //get and remove the first chartacter of params.skill
  let skillDirection: Direction | undefined = undefined;
  // if first character is a letter, then direction data is given
  // otherwise, the default direction will be picked by the SkillDB
  if (params.skill[0].match(/[a-z]/i)) {
    skillDirection =
      params.skill[0] === "f" ? Direction.Forward : Direction.Backward;
    params.skill = params.skill.slice(1);
  }

  return { skill: params.skill, direction: skillDirection };
};
