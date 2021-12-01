import { day1_input } from "./day1.input";

export function day1_1(input: number[] = day1_input) {
  return input.filter((number, index) => {
    return index !== 0 && number > input[index - 1];
  }).length;
}

export function day1_2(input: number[] = day1_input) {
  let prev,
    foundIncreases = 0;

  for (let i = 3; i <= input.length; i++) {
    if (prev) {
      if (input.slice(i - 3, i).reduce((a, b) => a + b) > prev) {
        foundIncreases++;
      }
    }
    prev = input.slice(i - 3, i).reduce((a, b) => a + b);
  }

  return foundIncreases;
}
