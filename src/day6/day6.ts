import { day6_input } from "./day6.input";

export function day6_1(input: any = day6_input, days: number = 80): number {
  let currentState = parseInput(input);
  for (var i = 1; i <= days; i++) {
    let spawns = 0;
    currentState = currentState.map((n) => {
      if (n === 0) {
        spawns++;
        return 6;
      }
      return n - 1;
    });

    for (let j = 0; j < spawns; j++) {
      currentState.push(8);
    }
  }
  return currentState.length;
}

export function parseInput(input: string) {
  return input.split(",").map((n) => parseInt(n, 10));
}

export function day6_2(input: any = day6_input, days: number = 256): number {
  const currentState = parseInput(input);
  let fishByAge: number[] = [];

  for (var i = 0; i <= 8; i++) {
    fishByAge.push(currentState.filter((n) => n === i).length || 0);
  }

  for (var i = 1; i <= days; i++) {
    let indexZero = fishByAge.splice(0, 1)[0];

    if (indexZero) {
      fishByAge[6] = fishByAge[6] + indexZero;
    }
    fishByAge.push(indexZero);
  }

  return fishByAge.reduce((a, b) => a + b, 0);
}
