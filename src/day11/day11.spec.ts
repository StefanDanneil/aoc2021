import { day11_1, day11_2, findNeighbours, parseInput } from "./day11";

const exampleInput = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

describe("day11_1", () => {
  test("it should return x given the example", () => {
    expect(day11_1(exampleInput)).toBe(1656);
  });
});

describe("parseInput", () => {
  test("it should return an array of octopi", () => {
    expect(
      parseInput(`123
    456
    789`)
    ).toEqual([
      { hasFlashed: false, value: 1, xIndex: 0, yIndex: 0 },
      { hasFlashed: false, value: 2, xIndex: 1, yIndex: 0 },
      { hasFlashed: false, value: 3, xIndex: 2, yIndex: 0 },
      { hasFlashed: false, value: 4, xIndex: 0, yIndex: 1 },
      { hasFlashed: false, value: 5, xIndex: 1, yIndex: 1 },
      { hasFlashed: false, value: 6, xIndex: 2, yIndex: 1 },
      { hasFlashed: false, value: 7, xIndex: 0, yIndex: 2 },
      { hasFlashed: false, value: 8, xIndex: 1, yIndex: 2 },
      { hasFlashed: false, value: 9, xIndex: 2, yIndex: 2 },
    ]);
  });
});

describe("findNeighbours", () => {
  test("it should find all neighbours", () => {
    const octopi = parseInput(`123
    456
    789`);

    expect(findNeighbours(octopi[0], octopi)).toEqual([
      { hasFlashed: false, value: 2, xIndex: 1, yIndex: 0 },
      { hasFlashed: false, value: 4, xIndex: 0, yIndex: 1 },
      { hasFlashed: false, value: 5, xIndex: 1, yIndex: 1 },
    ]);
  });
});

describe("day11_2", () => {
  test("it should return 195 given the example", () => {
    expect(day11_2(exampleInput)).toBe(195);
  });
});
