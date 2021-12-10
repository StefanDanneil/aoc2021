import { day9_input } from "./day9.input";

export function day9_1(input: any = day9_input): number {
  const rows = parseInput(input);

  const foundLowSpots: number[] = [];

  rows.forEach((row, rowIndex) => {
    row.forEach((n, i) => {
      const left = i !== 0 ? row[i - 1] : undefined;
      const right = i !== row.length - 1 ? row[i + 1] : undefined;
      const upper = rowIndex !== 0 ? rows[rowIndex - 1][i] : undefined;
      const lower =
        rowIndex !== rows.length - 1 ? rows[rowIndex + 1][i] : undefined;

      const arr = [n, left, right, upper, lower]
        .filter((n) => n !== undefined)
        .sort();

      if (arr[0] === n && arr[1] !== n) {
        foundLowSpots.push(n);
      }
    });
  });

  return foundLowSpots.map((n) => n + 1).reduce((a, b) => a + b, 0);
}

export function parseInput(input: string): number[][] {
  return input.split("\n").map((r) =>
    r
      .trim()
      .split("")
      .map((n) => parseInt(n))
  );
}

export function day9_2(input: any = day9_input): number {
  return 0;
}
