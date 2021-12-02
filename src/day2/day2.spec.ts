import { day2_1, day2_2 } from "./day2";

describe("day2_1", () => {
  test("it should return 150 given the example", () => {
    expect(
      day2_1([
        ["forward", 5],
        ["down", 5],
        ["forward", 8],
        ["up", 3],
        ["down", 8],
        ["forward", 2],
      ])
    ).toBe(150);
  });
});

describe("day2_2", () => {
  test("it should return 900 given the example", () => {
    expect(
      day2_2([
        ["forward", 5],
        ["down", 5],
        ["forward", 8],
        ["up", 3],
        ["down", 8],
        ["forward", 2],
      ])
    ).toBe(900);
  });
});
