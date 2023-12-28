// only matters if we need to refer to this data again, which we shouldn't need to
// import skills from "../bloat/skills_dmt.json";

import skillDB from "../database/tempdb";

export default function getNewSkills() {
  const mySkillDB = new skillDB();

  let skillsNew;

  skillsNew = skills.map((skill) => {
    const skillInfo = mySkillDB.generateSkill(skill.FIGString);

    return {
      name: skill.name,

      DD: {
        TRI: skillInfo.DD.TRI,
        DMT: skillInfo.DD.DMT,
        TUM: skillInfo.DD.TUM,
      },

      FIG: skill.FIGString,
      FIGTumbling:
        skill.FIGString.length === 3 || skill.FIGString.length === 4
          ? (skill.direction === "forward" ? "." : "") +
            skill.FIGString.substring(1)
          : (skill.direction === "forward" ? "." : "") +
            skill.FIGString.substring(2),

      shape: skill.FIGString.slice(-1),
      flips: skillInfo.flips,
      twists: skillInfo.twists,

      direction: skill.direction,
      blind: skill.blind,

      dominant: skill.dominant ? true : false,
      normal: skill.type === "regular" ? true : false,
    };
  });

  return skillsNew;
}
