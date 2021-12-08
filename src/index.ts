import { day1_1, day1_2 } from "./day1";
import { day2_1, day2_2 } from "./day2";
import { day3_1, day3_2 } from "./day3";
import { day4_1, day4_2 } from "./day4";
import { day5_1, day5_2 } from "./day5";
import { day6_1, day6_2 } from "./day6";

const solutions = [
  day1_1,
  day1_2,
  day2_1,
  day2_2,
  day3_1,
  day3_2,
  day4_1,
  day4_2,
  day5_1,
  day5_2,
  day6_1,
  day6_2,
];

solutions.forEach((solution) => {
  console.log(`Solution for ${solution.name} is ${solution()}`);
});
