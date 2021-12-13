import { parse } from "@babel/core";
import { day9_input } from "./day9.input";

export interface LowSpot {
  value: number;
  rowIndex: number;
  index: number;
}

export function day9_1(input: any = day9_input): number {
  const foundLowSpots = findLowSpots(parseInput(input));

  return foundLowSpots.map((n) => n.value + 1).reduce((a, b) => a + b, 0);
}

export function parseInput(input: string): number[][] {
  return input.split("\n").map((r) =>
    r
      .trim()
      .split("")
      .map((n) => parseInt(n))
  );
}

export function findLowSpots(rows: number[][]) {
  const foundLowSpots: LowSpot[] = [];

  rows.forEach((row, rowIndex) => {
    row.forEach((n, index) => {
      const left = index !== 0 ? row[index - 1] : undefined;
      const right = index !== row.length - 1 ? row[index + 1] : undefined;
      const upper = rowIndex !== 0 ? rows[rowIndex - 1][index] : undefined;
      const lower =
        rowIndex !== rows.length - 1 ? rows[rowIndex + 1][index] : undefined;

      const arr = [n, left, right, upper, lower]
        .filter((n) => n !== undefined)
        .sort();

      if (arr[0] === n && arr[1] !== n) {
        foundLowSpots.push({ value: n, rowIndex, index });
      }
    });
  });

  return foundLowSpots;
}

export function day9_2(input: any = day9_input): number {
  const parsedInput = parseInput(input);
  const foundLowSpots = findLowSpots(parsedInput);
  const basins = foundLowSpots.map((l) => getBasinFromLowSpot(l, parsedInput));
  const largestBasins = basins.sort((a, b) => b.length - a.length).slice(0, 3);

  return largestBasins.reduce((a, b) => a * b.length, 1);
}

export function getBasinFromLowSpot(
  lowSpot: LowSpot,
  heatMap: number[][]
): LowSpot[] {
  let output: LowSpot[] = [];

  const left = heatMap[lowSpot.rowIndex][lowSpot.index - 1];
  const up = heatMap[lowSpot.rowIndex - 1]
    ? heatMap[lowSpot.rowIndex - 1][lowSpot.index]
    : undefined;
  const right = heatMap[lowSpot.rowIndex][lowSpot.index + 1];
  const down = heatMap[lowSpot.rowIndex + 1]
    ? heatMap[lowSpot.rowIndex + 1][lowSpot.index]
    : undefined;

  // Go left recursively
  if (left && left !== 9 && left > lowSpot.value) {
    output = output.concat(
      getBasinFromLowSpot(
        {
          value: heatMap[lowSpot.rowIndex][lowSpot.index - 1],
          rowIndex: lowSpot.rowIndex,
          index: lowSpot.index - 1,
        },
        heatMap
      )
    );
  }

  // Go right recursively
  if (right && right !== 9 && right > lowSpot.value) {
    output = output.concat(
      getBasinFromLowSpot(
        {
          value: heatMap[lowSpot.rowIndex][lowSpot.index + 1],
          rowIndex: lowSpot.rowIndex,
          index: lowSpot.index + 1,
        },
        heatMap
      )
    );
  }

  // Go up recursively
  if (up && up !== 9 && up > lowSpot.value) {
    output = output.concat(
      getBasinFromLowSpot(
        {
          value: heatMap[lowSpot.rowIndex - 1][lowSpot.index],
          rowIndex: lowSpot.rowIndex - 1,
          index: lowSpot.index,
        },
        heatMap
      )
    );
  }

  // Go down recursively
  if (down && down !== 9 && down > lowSpot.value) {
    output = output.concat(
      getBasinFromLowSpot(
        {
          value: heatMap[lowSpot.rowIndex + 1][lowSpot.index],
          rowIndex: lowSpot.rowIndex + 1,
          index: lowSpot.index,
        },
        heatMap
      )
    );
  }

  output.push(lowSpot);

  output = output.filter(
    (lp, index, self) =>
      index ===
      self.findIndex(
        (l) =>
          l.value === lp.value &&
          l.rowIndex === lp.rowIndex &&
          l.index === lp.index
      )
  );

  return output;
}
