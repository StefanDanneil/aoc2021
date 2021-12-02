import { day2_input } from "./day2.input";

enum Direction {
  up = "up",
  forward = "forward",
  down = "down",
}

export function day2_1(input: (string | number)[][] = day2_input): number {
  let depth = 0,
    horizontal = 0;

  input.forEach((command) => {
    let direction = command[0] as string;
    let distance = command[1] as number;
    switch (direction) {
      case Direction.down:
        depth += distance;
        break;
      case Direction.up:
        depth -= distance;
        break;
      case Direction.forward:
        horizontal += distance;
        break;
    }
  });

  return depth * horizontal;
}

export function day2_2(input: (string | number)[][] = day2_input): number {
  let depth = 0,
    horizontal = 0,
    aim = 0;

  input.forEach((command) => {
    let direction = command[0] as string;
    let distance = command[1] as number;
    switch (direction) {
      case Direction.down:
        aim += distance;
        break;
      case Direction.up:
        aim -= distance;
        break;
      case Direction.forward:
        horizontal += distance;
        depth += aim * distance;
        break;
    }
  });

  return depth * horizontal;
}
