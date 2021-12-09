import {
  day8_1,
  day8_2,
  parseInput,
  getValueFromEntry,
  isSupersetOf,
} from "./day8";

const testInput = `be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce`;

describe("day8_1", () => {
  test("it should return 26 given the example", () => {
    expect(day8_1(testInput)).toBe(26);
  });
});

describe("parseInput", () => {
  test("it should parse the input into a string[][] with the first entry being signal patters and second value being output values", () => {
    expect(parseInput(testInput)).toEqual([
      [
        "be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb",
        "fdgacbe cefdb cefbgd gcbe",
      ],
      [
        "edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec",
        "fcgedb cgb dgebacf gc",
      ],
      [
        "fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef",
        "cg cg fdcagb cbg",
      ],
      [
        "fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega",
        "efabcd cedba gadfec cb",
      ],
      [
        "aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga",
        "gecf egdcabf bgf bfgea",
      ],
      [
        "fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf",
        "gebdcfa ecba ca fadegcb",
      ],
      [
        "dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf",
        "cefg dcbef fcge gbcadfe",
      ],
      [
        "bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd",
        "ed bcgafe cdgba cbgef",
      ],
      [
        "egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg",
        "gbdfcae bgc cg cgb",
      ],
      [
        "gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc",
        "fgae cfgab fg bagce",
      ],
    ]);
  });
});

describe("day8_2", () => {
  test("it should return 61229 given the example", () => {
    expect(day8_2(testInput)).toBe(61229);
  });
});

describe("getValueFromEntry", () => {
  test("it should find the correct value", () => {
    expect(
      getValueFromEntry([
        "acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab",
        "cdfeb fcadb cdfeb cdbaf",
      ])
    ).toBe(5353);
  });
});

describe("isSubsetOf", () => {
  test("it should return true if the first array is a superset of the second", () => {
    expect(isSupersetOf(["c", "f", "s"], ["c", "f"])).toBe(true);
  });

  test("it should return true if the first array is a superset of the second, even if order is different", () => {
    expect(isSupersetOf(["f", "s", "c"], ["c", "f"])).toBe(true);
  });

  test("it should return false if the first array is not a superset of the second", () => {
    expect(isSupersetOf(["c", "f"], ["f", "s", "c"])).toBe(false);
  });
});
