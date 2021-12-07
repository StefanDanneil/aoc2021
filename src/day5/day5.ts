import { day5_input } from "./day5.input";

export class Diagram {
  traversedCoordinates: { [key: string]: number } = {};

  drawHorizontalLine(from: number[], to: number[]) {
    let yCoord = from[1];

    const xFrom = from[0] < to[0] ? from[0] : to[0];
    const xTo = from[0] > to[0] ? from[0] : to[0];

    for (let i = xFrom; i <= xTo; i++) {
      if (this.traversedCoordinates[`x${i}y${yCoord}`] == undefined) {
        this.traversedCoordinates[`x${i}y${yCoord}`] = 1;
      } else {
        this.traversedCoordinates[`x${i}y${yCoord}`] += 1;
      }
    }
  }

  drawVerticalLine(from: number[], to: number[]) {
    let xCoord = from[0];

    const yFrom = from[1] < to[1] ? from[1] : to[1];
    const yTo = from[1] > to[1] ? from[1] : to[1];

    for (let i = yFrom; i <= yTo; i++) {
      if (this.traversedCoordinates[`x${xCoord}y${i}`] == undefined) {
        this.traversedCoordinates[`x${xCoord}y${i}`] = 1;
      } else {
        this.traversedCoordinates[`x${xCoord}y${i}`] += 1;
      }
    }
  }

  DrawDiagonalLine(from: number[], to: number[]) {
    const xDirection = Math.sign(to[0] - from[0]);
    const yDirection = Math.sign(to[1] - from[1]);

    const difference = Math.abs(from[0] - to[0]);
    for (let i = 0; i <= difference; i++) {
      if (
        this.traversedCoordinates[
          `x${from[0] + i * xDirection}y${from[1] + i * yDirection}`
        ] == undefined
      ) {
        this.traversedCoordinates[
          `x${from[0] + i * xDirection}y${from[1] + i * yDirection}`
        ] = 1;
      } else {
        this.traversedCoordinates[
          `x${from[0] + i * xDirection}y${from[1] + i * yDirection}`
        ] += 1;
      }
    }
  }

  getOverlappingCoordinates() {
    return Object.values(this.traversedCoordinates).filter((value) => value > 1)
      .length;
  }
}

export function day5_1(input: any = day5_input): number {
  const parsedInput = input.split("\n").map((row: string) =>
    row
      .trim()
      .split("->")
      .map((instruction: string) => instruction.trim())
  );

  const output = new Diagram();

  parsedInput.forEach((instruction: string[]) => {
    const first = instruction[0]
      .split(",")
      .map((coordinate) => parseInt(coordinate, 10));

    const second = instruction[1]
      .split(",")
      .map((coordinate) => parseInt(coordinate, 10));

    if (first[0] === second[0]) {
      output.drawVerticalLine(first, second);
    }

    if (first[1] === second[1]) {
      output.drawHorizontalLine(first, second);
    }
  });

  return output.getOverlappingCoordinates();
}

export function day5_2(input: any = day5_input): number {
  const parsedInput = input.split("\n").map((row: string) =>
    row
      .trim()
      .split("->")
      .map((instruction: string) => instruction.trim())
  );

  const output = new Diagram();

  parsedInput.forEach((instruction: string[]) => {
    const first = instruction[0]
      .split(",")
      .map((coordinate) => parseInt(coordinate, 10));

    const second = instruction[1]
      .split(",")
      .map((coordinate) => parseInt(coordinate, 10));

    if (first[0] === second[0]) {
      output.drawVerticalLine(first, second);
    } else if (first[1] === second[1]) {
      output.drawHorizontalLine(first, second);
    } else if (
      Math.abs(first[0] - second[0]) === Math.abs(first[1] - second[1])
    ) {
      output.DrawDiagonalLine(first, second);
    }
  });

  return output.getOverlappingCoordinates();
}
