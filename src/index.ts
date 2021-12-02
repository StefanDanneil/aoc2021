import { day1_1, day1_2 } from "./day1";
import { day2_1, day2_2 } from "./day2";

const solutions = [day1_1, day1_2, day2_1, day2_2];

solutions.forEach((solution) => {
  console.log(`Solution for ${solution.name} is ${solution()}`);
});
