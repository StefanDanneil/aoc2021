import { parseInput } from ".";
import { Board, day4_1, day4_2 } from "./day4";

const testInput = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
2  0 12  3  7`;

describe("day4_1", () => {
  test("it should return 4512 given the test input", () => {
    expect(day4_1(testInput)).toBe(4512);
  });
});

describe("parseInput", () => {
  test("it should return a an array with numbers and an array with boards", () => {
    expect(
      parseInput(`1,2,3
    
    1 2
    6 7`)
    ).toEqual({
      numbers: [1, 2, 3],
      boards: [
        new Board(
          [
            [1, 2],
            [6, 7],
          ],
          [
            [1, 6],
            [2, 7],
          ]
        ),
      ],
    });
  });

  test("it should return a an array with numbers and an array with boards", () => {
    expect(
      parseInput(`1,2,3
    
      22 13 17 11  0
      8  2 23  4 24
     21  9 14 16  7
      6 10  3 18  5
      1 12 20 15 19`)
    ).toEqual({
      numbers: [1, 2, 3],
      boards: [
        new Board(
          [
            [22, 13, 17, 11, 0],
            [8, 2, 23, 4, 24],
            [21, 9, 14, 16, 7],
            [6, 10, 3, 18, 5],
            [1, 12, 20, 15, 19],
          ],
          [
            [22, 8, 21, 6, 1],
            [13, 2, 9, 10, 12],
            [17, 23, 14, 3, 20],
            [11, 4, 16, 18, 15],
            [0, 24, 7, 5, 19],
          ]
        ),
      ],
    });
  });
});

describe("Board", () => {
  test("it can calculate the sum of the board", () => {
    const board = new Board(
      [
        [1, 2],
        [6, 7],
      ],
      [
        [1, 6],
        [2, 7],
      ]
    );

    expect(board.getSumOfBoard()).toBe(16);
  });

  test("it can remove a number from the board", () => {
    const board = new Board(
      [
        [1, 2],
        [6, 0],
      ],
      [
        [1, 6],
        [2, 0],
      ]
    );

    board.removeNumber(2);
    expect(board).toEqual(new Board([[1], [6, 0]], [[1, 6], [0]]));

    board.removeNumber(0);
    expect(board).toEqual(new Board([[1], [6]], [[1, 6], []]));
  });

  test("it can check for bingo", () => {
    const board1 = new Board(
      [
        [1, 2],
        [6, 7],
      ],
      [
        [1, 6],
        [2, 7],
      ]
    );

    const board2 = new Board(
      [[1, 2], []],
      [
        [1, 6],
        [2, 7],
      ]
    );

    const board3 = new Board([[1, 2], [1]], [[], [2, 7]]);

    const board4 = new Board(
      [
        [3, 15, 22],
        [18, 5],
        [19, 8, 25],
        [20, 4],
        [12, 6],
      ],
      [[3, 19, 20], [15, 18, 8], [], [25, 12], [22, 5, 4, 6]]
    );

    expect(board1.hasBingo()).toBe(false);
    expect(board2.hasBingo()).toBe(true);
    expect(board3.hasBingo()).toBe(true);
    expect(board4.hasBingo()).toBe(true);
  });
});

describe("day4_2", () => {
  test("it should return 1924 given the example input", () => {
    expect(day4_2(testInput)).toBe(1924);
  });
});
