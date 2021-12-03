import { isBinary } from "@babel/types";
import { day3_input } from "./day3.input";

export function day3_1(input: string[] = day3_input): number {
  const diagnosticsLength = input[0].length;

  let gammaRate = "",
    epsilonRate = "";

  for (let i = 0; i < diagnosticsLength; i++) {
    const bit = findMostCommonValueOfIndex(input, i);
    gammaRate += bit;
    epsilonRate += bit === "1" ? "0" : "1";
  }

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}

export function findMostCommonValueOfIndex(
  input: string[],
  index: number
): string {
  const total = input
    .map((report) => report[index])
    .reduce((a, b) => {
      return (parseInt(a) + parseInt(b)).toString();
    });

  return parseInt(total) / input.length >= 0.5 ? "1" : "0";
}

export function day3_2(input: string[] = day3_input): number {
  const oxygenGeneratorRating = findOxygenGeneratorRating(input);
  const co2ScrubberRating = findCo2ScrubberRating(input);
  return oxygenGeneratorRating * co2ScrubberRating;
}

export function findOxygenGeneratorRating(input: string[]): number {
  const diagnosticsLength = input[0].length;

  let remainingEntries = input;
  for (let i = 0; i < diagnosticsLength; i++) {
    const bit = findMostCommonValueOfIndex(remainingEntries, i);
    remainingEntries = remainingEntries.filter((entry) => entry[i] === bit);
    if (remainingEntries.length === 1) {
      return parseInt(remainingEntries[0], 2);
    }
  }

  throw Error("could not find a single left entry");
}

export function findCo2ScrubberRating(input: string[]): number {
  const diagnosticsLength = input[0].length;

  let remainingEntries = input;
  for (let i = 0; i < diagnosticsLength; i++) {
    const bit =
      findMostCommonValueOfIndex(remainingEntries, i) === "1" ? "0" : "1";
    remainingEntries = remainingEntries.filter((entry) => entry[i] === bit);
    if (remainingEntries.length === 1) {
      return parseInt(remainingEntries[0], 2);
    }
  }
  throw Error("could not find a single left entry");
}
