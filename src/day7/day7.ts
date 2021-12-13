import { day7_input } from "./day7.input";

export function day7_1(input: any = day7_input): number {
  const parsedInput = parseInput(input);
  const median = getMedian(parsedInput);

  return parsedInput
    .map((n) => Math.abs(n - median))
    .reduce((a, b) => a + b, 0);
}

export function getMedian(arr: number[]): number {
  const sortedArray = arr.sort((a, b) => {
    if (a === b) {
      return 0;
    }
    return a > b ? 1 : -1;
  });

  return sortedArray.length % 2 === 0
    ? (sortedArray[Math.floor(sortedArray.length / 2 - 1)] +
        sortedArray[Math.ceil(sortedArray.length / 2)]) /
        2
    : sortedArray[Math.ceil(sortedArray.length / 2 - 1)];
}

export function getAverage(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function parseInput(input: string): number[] {
  return input.split(",").map((n) => parseInt(n, 10));
}

export function day7_2(input: any = day7_input): number {
  const parsedInput = parseInput(input);
  const floorAverage = Math.floor(getAverage(parsedInput));
  const ceilAverage = Math.ceil(getAverage(parsedInput));
  const floorValue = getFuelConsumtionFromPosition(parsedInput, floorAverage);
  const ceilValue = getFuelConsumtionFromPosition(parsedInput, ceilAverage);

  return floorValue > ceilValue ? ceilValue : floorValue;
}

export function getFuelConsumtionFromPosition(arr: number[], position: number) {
  return arr
    .map((n) => {
      const distance = Math.abs(n - position);
      let fuel = 0;
      for (let i = 1; i <= distance; i++) {
        fuel += i;
      }
      return fuel;
    })
    .reduce((a, b) => a + b, 0);
}
