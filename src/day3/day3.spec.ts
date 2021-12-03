import {
  day3_1,
  day3_2,
  findCo2ScrubberRating,
  findMostCommonValueOfIndex,
  findOxygenGeneratorRating,
} from "./day3";

const exampleInput = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

describe("day3_1", () => {
  test("it should return 198 given the example", () => {
    expect(day3_1(exampleInput)).toBe(198);
  });
});

describe("findMostCommonValueOfIndex()", () => {
  test("it should find that 1 is the most common value for first bit", () => {
    expect(findMostCommonValueOfIndex(exampleInput, 0)).toBe("1");
  });

  test("it should find that 0 is the most common value for second bit", () => {
    expect(findMostCommonValueOfIndex(exampleInput, 1)).toBe("0");
  });

  test("it should find that 1 is the most common value for third bit", () => {
    expect(findMostCommonValueOfIndex(exampleInput, 2)).toBe("1");
  });

  test("it should find that 1 is the most common value for fourth bit", () => {
    expect(findMostCommonValueOfIndex(exampleInput, 3)).toBe("1");
  });

  test("it should find that 0 is the most common value for fifth bit", () => {
    expect(findMostCommonValueOfIndex(exampleInput, 4)).toBe("0");
  });
});

describe("day3_2", () => {
  test("it should return 230 given the example", () => {
    expect(day3_2(exampleInput)).toBe(230);
  });

  describe("findOxygenGeneratorRating()", () => {
    test("it should return 23 given the example", () => {
      expect(findOxygenGeneratorRating(exampleInput)).toBe(23);
    });
  });

  describe("findCo2ScrubberRating()", () => {
    test("it should return 10 given the example", () => {
      expect(findCo2ScrubberRating(exampleInput)).toBe(10);
    });
  });
});
