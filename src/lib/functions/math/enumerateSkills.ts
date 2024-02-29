// export default function enumerateNormalSkills() {}
// export default function enumerateSemiCursedSkills() {}
// export default function enumerateCursedSkills() {}

// export default function enumerateAllSkills(flips: number, twists: number) {}

// fn: generate all subsets of size n that sum to k
// call this in all the functions

export default function enumerateAllSkills(flips: number, twists: number) {
  function enumerateAllSkillsHelper(
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
        const recursiveSkills = enumerateAllSkillsHelper(
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

  return enumerateAllSkillsHelper(flips, twists * 2);
}

console.log(enumerateAllSkills(2, 1));
