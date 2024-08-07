// paste DMT data in here
const data = [];

const firstSkills = [...new Set(data.map((routine) => routine.skills[0]))];

// console.log(firstSkills);

const secondSkills = [...new Set(data.map((routine) => routine.skills[1]))];

// console.log(secondSkills);

let progress = [];

data.forEach((routine) => {
  const firstSkill = routine.skills[0] || "None";
  const secondSkill = routine.skills[1] || "None";

  progress[firstSkill] = progress[firstSkill] || [];

  progress[firstSkill][secondSkill] = progress[firstSkill][secondSkill]
    ? progress[firstSkill][secondSkill] + 1
    : 1;
});

console.log(progress);
