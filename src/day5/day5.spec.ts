import { day5_1, day5_2 } from "./day5";

describe("day5_1", () => {
  test("it should return 5 given the example", () => {
    expect(
      day5_1(
        `0,9 -> 5,9
    8,0 -> 0,8
    9,4 -> 3,4
    2,2 -> 2,1
    7,0 -> 7,4
    6,4 -> 2,0
    0,9 -> 2,9
    3,4 -> 1,4
    0,0 -> 8,8
    5,5 -> 8,2`
      )
    ).toBe(5);
  });
});

describe("day5_2", () => {
  test("it should return 12 given the example", () => {
    expect(
      day5_2(`0,9 -> 5,9
    8,0 -> 0,8
    9,4 -> 3,4
    2,2 -> 2,1
    7,0 -> 7,4
    6,4 -> 2,0
    0,9 -> 2,9
    3,4 -> 1,4
    0,0 -> 8,8
    5,5 -> 8,2`)
    ).toBe(12);
  });
});
