import { day6_1, day6_2, parseInput } from "./day6";

describe("day6_1", () => {
  test("it should return 26 given 18 days example", () => {
    expect(day6_1("3,4,3,1,2", 18)).toBe(26);
  });

  test("it should return 5934 given 80 days example", () => {
    expect(day6_1("3,4,3,1,2", 80)).toBe(5934);
  });
});

describe("parseInput()", () => {
  test("it should return a numberarray given the test input as a string", () => {
    expect(parseInput("3,4,3,1,2")).toEqual([3, 4, 3, 1, 2]);
  });
});

describe("day6_2", () => {
  test("it should return 7 given 3 days", () => {
    expect(day6_2("3,4,3,1,2", 3)).toBe(7);
  });

  test("it should return 9 given 4 days", () => {
    expect(day6_2("3,4,3,1,2", 4)).toBe(9);
  });

  test("it should return 10 given 5 days", () => {
    expect(day6_2("3,4,3,1,2", 5)).toBe(10);
  });

  test("it should return 10 given 6 days", () => {
    expect(day6_2("3,4,3,1,2", 6)).toBe(10);
  });

  test("it should return 11 given 9 days", () => {
    expect(day6_2("3,4,3,1,2", 9)).toBe(11);
  });

  test("it should still return 26 given 18 days", () => {
    expect(day6_2("3,4,3,1,2", 18)).toBe(26);
  });

  test("it should still return 5934 given 80 days", () => {
    expect(day6_2("3,4,3,1,2", 80)).toBe(5934);
  });
  test("it should return 26984457539 given the example", () => {
    expect(day6_2("3,4,3,1,2")).toBe(26984457539);
  });
});
