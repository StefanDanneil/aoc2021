import {
  day10_1,
  day10_2,
  findCompletionString,
  findIllegalCharacter,
  getPointsFromCompletionString,
} from "./day10";

const testInput = `[({(<(())[]>[[{[]{<()<>>
  [(()[<>])]({[<{<<[]>>(
  {([(<{}[<>[]}>{[]{[(<()>
  (((({<>}<{<{<>}{[]{[]{}
  [[<[([]))<([[{}[[()]]]
  [{[{({}]{}}([{[{{{}}([]
  {<[[]]>}<{[{[{[]{()[[[]
  [<(<(<(<{}))><([]([]()
  <{([([[(<>()){}]>(<<{{
  <{([{{}}[<[[[<>{}]]]>[]]`;

describe("day10_1", () => {
  test("it should return 26397 given the example", () => {
    expect(day10_1(testInput)).toBe(26397);
  });
});

describe("isCorrupted", () => {
  test("it should find this string corrupted", () => {
    expect(findIllegalCharacter("{([(<{}[<>[]}>{[]{[(<()>")).toBe("}");
  });

  test("it should find this string corrupted", () => {
    expect(findIllegalCharacter("[[<[([]))<([[{}[[()]]]")).toBe(")");
  });

  test("it should find this string corrupted", () => {
    expect(findIllegalCharacter("[{[{({}]{}}([{[{{{}}([]")).toBe("]");
  });

  test("it should find this string corrupted", () => {
    expect(findIllegalCharacter("[<(<(<(<{}))><([]([]()")).toBe(")");
  });

  test("it should find this string corrupted", () => {
    expect(findIllegalCharacter("<{([([[(<>()){}]>(<<{{")).toBe(">");
  });

  test("it should find this string ok", () => {
    expect(findIllegalCharacter("[({(<(())[]>[[{[]{<()<>>")).toBe("");
  });

  test("it should find this string ok", () => {
    expect(findIllegalCharacter("[(()[<>])]({[<{<<[]>>(")).toBe("");
  });

  test("it should find this string ok", () => {
    expect(findIllegalCharacter("(((({<>}<{<{<>}{[]{[]{}")).toBe("");
  });

  test("it should find this string ok", () => {
    expect(findIllegalCharacter("{<[[]]>}<{[{[{[]{()[[[]")).toBe("");
  });

  test("it should find this string ok", () => {
    expect(findIllegalCharacter("<{([{{}}[<[[[<>{}]]]>[]]")).toBe("");
  });
});

describe("day10_2", () => {
  test("it should return 288957 given the example", () => {
    expect(day10_2(testInput)).toBe(288957);
  });
});

describe("findCompletionString", () => {
  test("it should find an empty string if the string is corrupted", () => {
    expect(findCompletionString("{([(<{}[<>[]}>{[]{[(<()>")).toEqual("");
  });

  test("it should find an empty string if the string is corrupted", () => {
    expect(findCompletionString("[[<[([]))<([[{}[[()]]]")).toEqual("");
  });

  test("it should find an empty string if the string is corrupted", () => {
    expect(findCompletionString("[{[{({}]{}}([{[{{{}}([]")).toEqual("");
  });

  test("it should find an empty string if the string is corrupted", () => {
    expect(findCompletionString("[<(<(<(<{}))><([]([]()")).toEqual("");
  });

  test("it should find an empty string if the string is corrupted", () => {
    expect(findCompletionString("<{([([[(<>()){}]>(<<{{")).toEqual("");
  });

  test("it should the completionString if the string is incomplete", () => {
    expect(findCompletionString("[({(<(())[]>[[{[]{<()<>>")).toEqual(
      "}}]])})]"
    );
  });

  test("it should the completionString if the string is incomplete", () => {
    expect(findCompletionString("[(()[<>])]({[<{<<[]>>(")).toEqual(")}>]})");
  });

  test("it should the completionString if the string is incomplete", () => {
    expect(findCompletionString("(((({<>}<{<{<>}{[]{[]{}")).toEqual(
      "}}>}>))))"
    );
  });

  test("it should the completionString if the string is incomplete", () => {
    expect(findCompletionString("{<[[]]>}<{[{[{[]{()[[[]")).toEqual(
      "]]}}]}]}>"
    );
  });

  test("it should the completionString if the string is incomplete", () => {
    expect(findCompletionString("<{([{{}}[<[[[<>{}]]]>[]]")).toEqual("])}>");
  });
});

describe("getPointsFromCompletionString", () => {
  test("])}> should return 294", () => {
    expect(getPointsFromCompletionString("])}>")).toBe(294);
  });

  test("}}]])})] should return 288957", () => {
    expect(getPointsFromCompletionString("}}]])})]")).toBe(288957);
  });
});
