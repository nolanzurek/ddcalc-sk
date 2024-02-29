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
  if (twists % 1 === 0) {
    // we call enumerate skills helper with "twists" since
    // for a normal skill, the (possibly, depending on direction) first and last
    // flips have 1+n*0.5 twists, so we can just subtract 1 from the twists
    // and the rest have some n twists
    // this checks out, but in case I have to debug it, I need to explain what I'm doing
    twists -= 1;
    return enumerateSkillsHelper(flips, twists)
      .map((skill) => skill.map((twist) => twist * 2))
      .map((skill) => {
        const modifiedSkill = [...skill];
        modifiedSkill[0] += 1;
        modifiedSkill[modifiedSkill.length - 1] += 1;
        return modifiedSkill;
      });
    // forward skill
  } else {
    twists = twists - 0.5;
    return enumerateSkillsHelper(flips, twists)
      .map((skill) => skill.map((twist) => twist * 2))
      .map((skill) => {
        const modifiedSkill = [...skill];
        modifiedSkill[modifiedSkill.length - 1] += 1;
        return modifiedSkill;
      });
  }
}

// general recursive helper function that computes all possible multisets
// summing to twists with flips elements
// applied in all the functions
function enumerateSkillsHelper(flips: number, twists: number): number[][] {
  if (flips === 1) {
    // only one flip left, so the twists must all be in that last flip
    return [[twists]];
  } else if (twists === 0) {
    // no twists left, so the flips must all have 0 twists
    return [new Array(flips).fill(0)];
  } else {
    // recursive case: we take the cartesian product of
    // the "start" of the skills (in acc)
    // the possible ends of the skills (recursive call)
    let result: number[][] = [];
    for (let i: number = 0; i <= twists; i++) {
      const recursiveSkills = enumerateSkillsHelper(flips - 1, twists - i);
      for (const end in recursiveSkills) {
        result.push([i].concat(recursiveSkills[end]));
      }
    }
    return result;
  }
}
