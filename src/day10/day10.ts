import { findMostCommonValueOfIndex } from "../day3";
import { day10_input } from "./day10.input";

export function day10_1(input: string = day10_input): number {
  const lines = parseInput(input);
  const pointMap: { [key: string]: number } = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137,
  };

  const foundIllegalCharacters = lines
    .map((l) => findIllegalCharacter(l))
    .filter((c) => c !== "");

  return foundIllegalCharacters.reduce((a, b) => a + pointMap[b], 0);
}

export function parseInput(input: string): string[] {
  return input.split("\n").map((s) => s.trim());
}

export function findIllegalCharacter(line: string): string {
  const opening = ["(", "[", "{", "<"];
  const closing = [")", "]", "}", ">"];
  const expectedClosings = [closing[opening.indexOf(line.substring(0, 1))]];

  try {
    line.split("").forEach((s) => {
      if (opening.includes(s)) {
        expectedClosings.push(closing[opening.indexOf(s)]);
      } else {
        const expected = expectedClosings.pop();
        if (s !== expected) {
          throw Error(s);
        }
      }
    });
  } catch (error: any) {
    return error.message;
  }

  return "";
}

export function day10_2(input: string = day10_input): number {
  const lines = parseInput(input);

  const completionStrings = lines
    .map((l) => findCompletionString(l))
    .filter((a) => a.length > 0);

  const scores = completionStrings
    .map((s) => getPointsFromCompletionString(s))
    .sort((a, b) => a - b);

  const middleIndex = scores.length / 2 - 0.5;

  return scores[middleIndex];
}

export function findCompletionString(line: string): string {
  const opening = ["(", "[", "{", "<"];
  const closing = [")", "]", "}", ">"];
  const expectedClosings: string[] = [];

  try {
    line.split("").forEach((s) => {
      if (opening.includes(s)) {
        expectedClosings.push(closing[opening.indexOf(s)]);
      } else {
        const expected = expectedClosings.pop();

        if (s !== expected) {
          throw Error(s);
        }
      }
    });
  } catch (error: any) {
    return "";
  }

  return expectedClosings.reverse().join("");
}

export function getPointsFromCompletionString(
  completionString: string
): number {
  const pointsMap: { [key: string]: number } = {
    ")": 1,
    "]": 2,
    "}": 3,
    ">": 4,
  };

  return completionString.split("").reduce((a, b) => {
    return a * 5 + pointsMap[b];
  }, 0);
}
