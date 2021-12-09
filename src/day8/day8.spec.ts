import { day8_1, day8_2, parseInput } from "./day8";

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

describe.skip("day8_2", () => {
  test("it should return x given the example", () => {
    expect(day8_2([])).toBe(0);
  });
});
