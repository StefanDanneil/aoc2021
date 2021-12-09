import { day8_input } from "./day8.input";

export function day8_1(input: string = day8_input): number {
  const parsedInput = parseInput(input);
  const outputs = parsedInput.map((entry) => entry[1].split(" ")).flat();

  return outputs.filter(
    (o) => o.length === 2 || o.length === 3 || o.length === 4 || o.length === 7
  ).length;
}

export function parseInput(input: string): string[][] {
  return input.split("\n").map((i) =>
    i
      .trim()
      .split("|")
      .map((a) => a.trim())
  );
}

export function day8_2(input: any = day8_input): number {
  return 0;
}
