// export default function enumerateSemiCursedSkills() {}
// export default function enumerateCursedSkills() {}

// export default function enumerateAllSkills(flips: number, twists: number) {}

// fn: generate all subsets of size n that sum to k
// call this in all the functions

export function enumerateAllSkills(flips: number, twists: number) {
  return enumerateSkillsHelper(flips, twists * 2);
}

export function enumerateNormalSkills(flips: number, twists: number) {
  // backwards skill
  if ((twists * 2) % 2 == 0) {
    return enumerateSkillsHelper(flips, (twists - 1) / 2)
      .map((skill) => skill.map((twist) => twist * 2))
      .map((skill) => {
        const modifiedSkill = [...skill];
        modifiedSkill[0] += 0.5;
        modifiedSkill[modifiedSkill.length - 1] += 0.5;
        return modifiedSkill;
      });
    // forward skill
  } else {
    return enumerateSkillsHelper(flips, (twists - 0.5) / 2)
      .map((skill) => skill.map((twist) => twist * 2))
      .map((skill) => {
        const modifiedSkill = [...skill];
        modifiedSkill[modifiedSkill.length - 1] += 0.5;
        return modifiedSkill;
      });
  }
}

// general recursive helper function that computes all possible multisets
// summing to twists with flips elements
// applied in all the functions
function enumerateSkillsHelper(
  flips: number,
  twists: number,
  acc: number[][] = [[]]
): number[][] {
  if (flips === 1) {
    // only one flip left, so the twists must all be in that last flip
    // return acc.map((el) => el.concat([twists]));
    return [[twists]];
  } else if (twists === 0) {
    // no twists left, so the flips must all have 0 twists
    // return acc.map((el) => el.concat(new Array(flips).fill(0)));
    return [new Array(flips).fill(0)];
  } else {
    // recursive case: we take the cartesian product of
    // the "start" of the skills (in acc)
    // the possible ends of the skills (recursive call)
    let result: number[][] = [];
    for (let i: number = 0; i <= twists; i++) {
      const recursiveSkills = enumerateSkillsHelper(
        flips - 1,
        twists - i /*, acc */
      );
      for (const end in recursiveSkills) {
        result.push([i].concat(recursiveSkills[end]));
      }
    }
    return result;
  }
}
