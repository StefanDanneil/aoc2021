import { getMedian } from ".";
import { day7_1, day7_2, getAverage, parseInput } from "./day7";

describe("day7_1", () => {
  test("it should return 37 given the example", () => {
    expect(day7_1(`16,1,2,0,4,2,7,1,2,14`)).toBe(37);
  });
});

describe("parseInput", () => {
  test("it should return parse the input as a string to a numberarray", () => {
    expect(parseInput(`16,1,2,0,4,2,7,1,2,14`)).toEqual([
      16, 1, 2, 0, 4, 2, 7, 1, 2, 14,
    ]);
  });
});

describe("getMedian", () => {
  test("it should return 3 given an only 3 in the middle", () => {
    expect(getMedian([1, 3, 5])).toEqual(3);
  });

  test("it should return the average of the 2 middle numbers if the array is of even length", () => {
    expect(getMedian([1, 2, 3, 4])).toBe(2.5);
  });

  test("it should return 2 given the example", () => {
    expect(getMedian([16, 1, 2, 0, 4, 2, 7, 1, 2, 14])).toEqual(2);
  });
});

describe("getAverage", () => {
  test("it should calculate the average", () => {
    expect(getAverage([1, 3, 5])).toEqual(3);
  });

  test("should calculate the average", () => {
    expect(getAverage([1, 2, 3, 4])).toBe(2.5);
  });

  test("should calculate the average", () => {
    expect(getAverage([4, 4, 4, 4, 4, 4, 4, 4])).toBe(4);
  });

  test("it should return 4.9 given the example", () => {
    expect(getAverage([16, 1, 2, 0, 4, 2, 7, 1, 2, 14])).toEqual(4.9);
  });
});

describe("day7_2", () => {
  test("it should return 168 given the example", () => {
    expect(day7_2(`16,1,2,0,4,2,7,1,2,14`)).toBe(168);
  });
});
