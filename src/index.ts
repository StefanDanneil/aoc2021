import { day1_1, day1_2 } from "./day1";

const solutions = [day1_1, day1_2];

solutions.forEach((solution) => {
  console.log(`Solution for ${solution.name} is ${solution()}`);
});
