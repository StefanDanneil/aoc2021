import { day12_1, day12_2, findPaths, parseInput } from "./day12";

const firstExample = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

const secondExample = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`;

const thirdExample = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`;

const smallCave = parseInput(firstExample);

const mediumCave = parseInput(secondExample);

describe("day12_1", () => {
  test("it should return 10 given the first example", () => {
    expect(day12_1(firstExample)).toBe(10);
  });

  test("it should return 19 given the second example", () => {
    expect(day12_1(secondExample)).toBe(19);
  });

  test("it should return 226 given the third example", () => {
    expect(day12_1(thirdExample)).toBe(226);
  });
});

describe("parseInput", () => {
  test("it should parse the input into an array of caves", () => {
    expect(parseInput(firstExample)).toEqual([
      { name: "start", isBig: false, connects_to: ["A", "b"] },
      { name: "A", isBig: true, connects_to: ["c", "b", "end"] },
      { name: "b", isBig: false, connects_to: ["A", "d", "end"] },
      { name: "c", isBig: false, connects_to: ["A"] },
      { name: "d", isBig: false, connects_to: ["b"] },
      { name: "end", isBig: false, connects_to: [] },
    ]);
  });
});

describe("findPaths", () => {
  test("it should return a stringarray with all the different paths", () => {
    expect(findPaths(smallCave).sort()).toEqual(
      [
        "start,A,b,A,c,A,end",
        "start,A,b,A,end",
        "start,A,b,end",
        "start,A,c,A,b,end",
        "start,A,c,A,b,A,end",
        "start,A,c,A,end",
        "start,A,end",
        "start,b,A,c,A,end",
        "start,b,A,end",
        "start,b,end",
      ].sort()
    );

    expect(findPaths(mediumCave).sort()).toEqual(
      [
        "start,HN,dc,HN,end",
        "start,HN,dc,HN,kj,HN,end",
        "start,HN,dc,end",
        "start,HN,dc,kj,HN,end",
        "start,HN,end",
        "start,HN,kj,HN,dc,HN,end",
        "start,HN,kj,HN,dc,end",
        "start,HN,kj,HN,end",
        "start,HN,kj,dc,HN,end",
        "start,HN,kj,dc,end",
        "start,dc,HN,end",
        "start,dc,HN,kj,HN,end",
        "start,dc,end",
        "start,dc,kj,HN,end",
        "start,kj,HN,dc,HN,end",
        "start,kj,HN,dc,end",
        "start,kj,HN,end",
        "start,kj,dc,HN,end",
        "start,kj,dc,end",
      ].sort()
    );
  });

  test("it should be able to define a set amount of times it can visit nodes", () => {
    expect(findPaths(smallCave, true).sort()).toEqual(
      [
        "start,A,b,A,b,A,c,A,end",
        "start,A,b,A,b,A,end",
        "start,A,b,A,b,end",
        "start,A,b,A,c,A,b,A,end",
        "start,A,b,A,c,A,b,end",
        "start,A,b,A,c,A,c,A,end",
        "start,A,b,A,c,A,end",
        "start,A,b,A,end",
        "start,A,b,d,b,A,c,A,end",
        "start,A,b,d,b,A,end",
        "start,A,b,d,b,end",
        "start,A,b,end",
        "start,A,c,A,b,A,b,A,end",
        "start,A,c,A,b,A,b,end",
        "start,A,c,A,b,A,c,A,end",
        "start,A,c,A,b,A,end",
        "start,A,c,A,b,d,b,A,end",
        "start,A,c,A,b,d,b,end",
        "start,A,c,A,b,end",
        "start,A,c,A,c,A,b,A,end",
        "start,A,c,A,c,A,b,end",
        "start,A,c,A,c,A,end",
        "start,A,c,A,end",
        "start,A,end",
        "start,b,A,b,A,c,A,end",
        "start,b,A,b,A,end",
        "start,b,A,b,end",
        "start,b,A,c,A,b,A,end",
        "start,b,A,c,A,b,end",
        "start,b,A,c,A,c,A,end",
        "start,b,A,c,A,end",
        "start,b,A,end",
        "start,b,d,b,A,c,A,end",
        "start,b,d,b,A,end",
        "start,b,d,b,end",
        "start,b,end",
      ].sort()
    );
  });
});

describe("day12_2", () => {
  test("it should return 36 given the first example", () => {
    expect(day12_2(firstExample)).toBe(36);
  });

  test("it should return 103 given the second example", () => {
    expect(day12_2(secondExample)).toBe(103);
  });

  test("it should return 3509 given the third example", () => {
    expect(day12_2(thirdExample)).toBe(3509);
  });
});
