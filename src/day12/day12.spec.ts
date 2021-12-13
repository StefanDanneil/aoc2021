import { day12_1, day12_2 } from "./day12";

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

describe.skip("day12_2", () => {
  test("it should return x given the example", () => {
    expect(day12_2(``)).toBe(1);
  });
});
