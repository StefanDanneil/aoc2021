import { getValueFromEntry } from "../day8";
import {
  day9_1,
  day9_2,
  findLowSpots,
  getBasinFromLowSpot,
  LowSpot,
  parseInput,
} from "./day9";

const testInput = `2199943210
3987894921
9856789892
8767896789
9899965678`;

function sortLowPointArray(a: LowSpot, b: LowSpot) {
  if (a.value !== b.value) {
    return a.value - b.value;
  } else if (a.rowIndex !== b.rowIndex) {
    return a.rowIndex - b.rowIndex;
  } else {
    return a.index - b.index;
  }
}

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

describe("findLowSpots", () => {
  test("it should find  all the low spots", () => {
    expect(findLowSpots(parseInput(testInput))).toEqual([
      { value: 1, rowIndex: 0, index: 1 },
      { value: 0, rowIndex: 0, index: 9 },
      { value: 5, rowIndex: 2, index: 2 },
      { value: 5, rowIndex: 4, index: 6 },
    ]);
  });
});

describe("day9_2", () => {
  test("it should return 1134 given the example", () => {
    expect(day9_2(testInput)).toBe(1134);
  });
});

describe("getBasinFromLowSpot", () => {
  test("it should find the first basin from the example", () => {
    expect(
      getBasinFromLowSpot(
        { value: 1, rowIndex: 0, index: 1 },
        parseInput(testInput)
      ).sort(sortLowPointArray)
    ).toEqual(
      [
        { value: 1, rowIndex: 0, index: 1 },
        { value: 2, rowIndex: 0, index: 0 },
        { value: 3, rowIndex: 1, index: 0 },
      ].sort(sortLowPointArray)
    );
  });

  test("it should find the second basin from the example", () => {
    expect(
      getBasinFromLowSpot(
        { value: 0, rowIndex: 0, index: 9 },
        parseInput(testInput)
      ).sort(sortLowPointArray)
    ).toEqual(
      [
        { value: 0, rowIndex: 0, index: 9 },
        { value: 1, rowIndex: 0, index: 8 },
        { value: 2, rowIndex: 0, index: 7 },
        { value: 3, rowIndex: 0, index: 6 },
        { value: 4, rowIndex: 0, index: 5 },
        { value: 1, rowIndex: 1, index: 9 },
        { value: 2, rowIndex: 1, index: 8 },
        { value: 4, rowIndex: 1, index: 6 },
        { value: 2, rowIndex: 2, index: 9 },
      ].sort(sortLowPointArray)
    );
  });

  test("it should find the third basin from the example", () => {
    expect(
      getBasinFromLowSpot(
        { value: 5, rowIndex: 2, index: 2 },
        parseInput(testInput)
      ).sort(sortLowPointArray)
    ).toEqual(
      [
        { value: 8, rowIndex: 1, index: 2 },
        { value: 7, rowIndex: 1, index: 3 },
        { value: 8, rowIndex: 1, index: 4 },

        { value: 8, rowIndex: 2, index: 1 },
        { value: 5, rowIndex: 2, index: 2 },
        { value: 6, rowIndex: 2, index: 3 },
        { value: 7, rowIndex: 2, index: 4 },
        { value: 8, rowIndex: 2, index: 5 },

        { value: 8, rowIndex: 3, index: 0 },
        { value: 7, rowIndex: 3, index: 1 },
        { value: 6, rowIndex: 3, index: 2 },
        { value: 7, rowIndex: 3, index: 3 },
        { value: 8, rowIndex: 3, index: 4 },

        { value: 8, rowIndex: 4, index: 1 },
      ].sort(sortLowPointArray)
    );
  });

  test("it should find the last basin from the example", () => {
    expect(
      getBasinFromLowSpot(
        { value: 5, rowIndex: 4, index: 6 },
        parseInput(testInput)
      ).sort(sortLowPointArray)
    ).toEqual(
      [
        { value: 6, rowIndex: 4, index: 5 },
        { value: 5, rowIndex: 4, index: 6 },
        { value: 6, rowIndex: 4, index: 7 },
        { value: 7, rowIndex: 4, index: 8 },
        { value: 8, rowIndex: 4, index: 9 },
        { value: 6, rowIndex: 3, index: 6 },
        { value: 7, rowIndex: 3, index: 7 },
        { value: 8, rowIndex: 3, index: 8 },
        { value: 8, rowIndex: 2, index: 7 },
      ].sort(sortLowPointArray)
    );
  });
});
