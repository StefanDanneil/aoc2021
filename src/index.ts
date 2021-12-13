import { day1_1, day1_2 } from "./day1";
import { day2_1, day2_2 } from "./day2";
import { day3_1, day3_2 } from "./day3";
import { day4_1, day4_2 } from "./day4";
import { day5_1, day5_2 } from "./day5";
import { day6_1, day6_2 } from "./day6";
import { day7_1, day7_2 } from "./day7";
import { day8_1, day8_2 } from "./day8";
import { day9_1, day9_2 } from "./day9";
import { day10_1, day10_2 } from "./day10";
import { day11_1, day11_2 } from "./day11";

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
  day7_1,
  day7_2,
  day8_1,
  day8_2,
  day9_1,
  day9_2,
  day10_1,
  day10_2,
  day11_1,
  day11_2,
];

solutions.forEach((solution) => {
  console.log(`Solution for ${solution.name} is ${solution()}`);
});
