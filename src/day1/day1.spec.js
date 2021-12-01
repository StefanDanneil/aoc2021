import { day1_1, day1_2 } from "./day1";

describe("day1_1", () => {
  test("it should return 1 when there is only one increase", () => {
    expect(day1_1([2, 3])).toBe(1);
  });

  test("it should return 2 when there is 2 increases", () => {
    expect(day1_1([1, 2, 3])).toBe(2);
  });

  test("it should return 2 when there is 2 increases with numbers between", () => {
    expect(day1_1([1, 2, 1, 1, 3])).toBe(2);
  });

  test("it should return 7 for the given example", () => {
    expect(day1_1([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])).toBe(7);
  });
});

describe("day1_2", () => {
  test("it should return 5 for the given example", () => {
    expect(day1_2([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])).toBe(5);
  });
});
