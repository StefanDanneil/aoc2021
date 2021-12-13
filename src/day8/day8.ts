import { day8_input } from "./day8.input";

export function day8_1(input: string = day8_input): number {
  const parsedInput = parseInput(input);
  const outputs = parsedInput.map((entry) => entry[1].split(" ")).flat();

  return outputs.filter(
    (o) => o.length === 2 || o.length === 3 || o.length === 4 || o.length === 7
  ).length;
}

export function parseInput(input: string): string[][] {
  return input.split("\n").map((i) =>
    i
      .trim()
      .split("|")
      .map((a) => a.trim())
  );
}

export function day8_2(input: any = day8_input): number {
  const parsedInput = parseInput(input);

  return parsedInput
    .map((entry) => getValueFromEntry(entry))
    .reduce((a, b) => a + b, 0);
}

class NumberHelper {
  knownDigitsMap: { [key: string]: number } = {};
  knownDigitsNumericalMap: { [key: string]: string[] } = {};

  addKnownNumber(s: string, n: number) {
    const orderedString = s.split("").sort().join("");

    this.knownDigitsMap[orderedString] = n;
    this.knownDigitsNumericalMap[n.toString()] = orderedString.split("");
  }

  getNumber(n: number) {
    return this.knownDigitsNumericalMap[n.toString()];
  }

  getNumberFromValueString(s: string) {
    return this.knownDigitsMap[s];
  }
}

export function getValueFromEntry(entry: string[]): number {
  const outputValue = entry[1]
    .split(" ")
    .map((s) => s.split("").sort().join(""));
  let unknownDigits = entry[0].split(" ").sort((a, b) => a.length - b.length);
  const numberHelper = new NumberHelper();

  numberHelper.addKnownNumber(unknownDigits[0], 1);
  numberHelper.addKnownNumber(unknownDigits[1], 7);
  numberHelper.addKnownNumber(unknownDigits[2], 4);
  numberHelper.addKnownNumber(unknownDigits[9], 8);

  unknownDigits = unknownDigits
    .filter(
      (d) =>
        !Object.keys(numberHelper.knownDigitsMap).includes(
          d.split("").sort().join("")
        )
    )
    .sort((a, b) => b.length - a.length); // sort by order, longest first;

  unknownDigits.forEach((d) => {
    const arr = d.split("");

    // we are able to derive 0, 6 and 9 from data we already have
    if (d.length === 6) {
      // 0, 6 or 9
      if (isSupersetOf(arr, numberHelper.getNumber(4))) {
        numberHelper.addKnownNumber(d, 9);
      } else if (isSupersetOf(arr, numberHelper.getNumber(7))) {
        numberHelper.addKnownNumber(d, 0);
      } else {
        numberHelper.addKnownNumber(d, 6);
      }
    }

    // since we have already derived 0,1,4,6,7,8,9 we now have enough information to solve this
    if (d.length === 5) {
      // 2, 3 or 5
      if (isSupersetOf(arr, numberHelper.getNumber(1))) {
        numberHelper.addKnownNumber(d, 3);
      } else if (isSupersetOf(numberHelper.getNumber(6), arr)) {
        numberHelper.addKnownNumber(d, 5);
      } else {
        numberHelper.addKnownNumber(d, 2);
      }
    }
  });

  return parseInt(
    outputValue.map((v) => numberHelper.knownDigitsMap[v]).join(""),
    10
  );
}

export function isSupersetOf(superset: string[], subset: string[]): boolean {
  if (subset.filter((n) => !superset.includes(n)).length > 0) {
    return false;
  }

  return superset.filter((n) => subset.includes(n)).length > 0;
}
