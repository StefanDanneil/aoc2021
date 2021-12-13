import { findOxygenGeneratorRating } from "../day3";
import { day11_input } from "./day11.input";

class Octopus {
  hasFlashed: boolean;
  value: number;
  xIndex: number;
  yIndex: number;

  constructor(
    hasFlashed: boolean,
    value: number,
    xIndex: number,
    yIndex: number
  ) {
    this.hasFlashed = hasFlashed;
    this.value = value;
    this.xIndex = xIndex;
    this.yIndex = yIndex;
  }

  increaseValue(): void {
    this.value++;
  }
}

export function day11_1(input: string = day11_input): number {
  let octopi = parseInput(input);
  let flashes = 0;
  for (var day = 1; day <= 100; day++) {
    octopi.forEach((o) => {
      o.increaseValue();
    });

    let flashingOctopi = octopi.filter((o) => o.value > 9);

    while (flashingOctopi.length > 0) {
      flashingOctopi.forEach((o) => {
        o.hasFlashed = true;
        flashes++;
        findNeighbours(o, octopi).forEach((c) => c.increaseValue());
      });

      flashingOctopi = octopi.filter(
        (o) => o.value > 9 && o.hasFlashed === false
      );
    }

    octopi
      .filter((o) => o.hasFlashed === true)
      .forEach((o) => {
        o.value = 0;
        o.hasFlashed = false;
      });
  }

  return flashes;
}

export function parseInput(input: string): Octopus[] {
  const octopi: Octopus[] = [];
  input.split("\n").map((l, yIndex) =>
    l
      .trim()
      .split("")
      .forEach((n, xIndex) => {
        octopi.push(new Octopus(false, parseInt(n, 10), xIndex, yIndex));
      })
  );

  return octopi;
}

export function findNeighbours(o: Octopus, octopi: Octopus[]): Octopus[] {
  return octopi.filter((n) => {
    return (
      (n.yIndex - 1 === o.yIndex && n.xIndex - 1 === o.xIndex) ||
      (n.yIndex - 1 === o.yIndex && n.xIndex === o.xIndex) ||
      (n.yIndex - 1 === o.yIndex && n.xIndex + 1 === o.xIndex) ||
      (n.yIndex === o.yIndex && n.xIndex - 1 === o.xIndex) ||
      (n.yIndex === o.yIndex && n.xIndex + 1 === o.xIndex) ||
      (n.yIndex + 1 === o.yIndex && n.xIndex - 1 === o.xIndex) ||
      (n.yIndex + 1 === o.yIndex && n.xIndex === o.xIndex) ||
      (n.yIndex + 1 === o.yIndex && n.xIndex + 1 === o.xIndex)
    );
  });
}

export function day11_2(input: string = day11_input): number {
  let octopi = parseInput(input);
  let daysPassed = 0;
  let shouldContinue = true;

  while (shouldContinue) {
    octopi.forEach((o) => {
      o.increaseValue();
    });

    let flashingOctopi = octopi.filter((o) => o.value > 9);

    while (flashingOctopi.length > 0) {
      flashingOctopi.forEach((o) => {
        o.hasFlashed = true;
        findNeighbours(o, octopi).forEach((c) => c.increaseValue());
      });

      flashingOctopi = octopi.filter(
        (o) => o.value > 9 && o.hasFlashed === false
      );
    }

    let flashedOctopi = octopi.filter((o) => o.hasFlashed === true);
    shouldContinue = flashedOctopi.length !== octopi.length;

    octopi
      .filter((o) => o.hasFlashed === true)
      .forEach((o) => {
        o.value = 0;
        o.hasFlashed = false;
      });

    daysPassed++;
  }

  return daysPassed;
}
