import { day9_1, day9_2, parseInput } from "./day9";

const testInput = `2199943210
3987894921
9856789892
8767896789
9899965678`;

describe("day9_1", () => {
  test("it should return 5 given the example", () => {
    expect(day9_1(testInput)).toBe(15);
  });
});

describe("parseInput", () => {
  test("it should parse the string into a number[][]", () => {
    expect(parseInput(testInput)).toEqual([
      [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
      [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
      [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
      [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
      [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
    ]);
  });
});

describe.skip("day9_2", () => {
  test("it should return 1134 given the example", () => {
    expect(day9_2(testInput)).toBe(1134);
  });
});
