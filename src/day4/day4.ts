import { parse } from "@babel/core";
import { day4_input } from "./day4.input";

export class Board {
  public rows: number[][];
  public columns: number[][];
  public hasWon = false;

  constructor(rows: number[][] = [], columns: number[][] = []) {
    this.rows = rows;
    this.columns = columns;
  }

  public getSumOfBoard(): number {
    return this.rows
      .map((row) => {
        return row.reduce((a, b) => a + b, 0);
      })
      .reduce((a, b) => a + b, 0);
  }

  public removeNumber(number: number) {
    this.rows.forEach((row, index) => {
      this.rows[index] = row.filter((n) => n !== number);
    });

    this.columns.forEach((column, index) => {
      this.columns[index] = column.filter((n) => n !== number);
    });
  }

  public hasBingo(): boolean {
    const emptyRows = this.rows.filter((row) => row.length === 0);
    const emptyColumns = this.columns.filter((column) => column.length === 0);

    return emptyRows.length > 0 || emptyColumns.length > 0;
  }
}

let BreakException = {};

export function day4_1(input: string = day4_input): number {
  const { numbers, boards } = parseInput(input);

  let winningSum = 0;
  let winningNumber = 0;

  try {
    numbers.forEach((n) => {
      boards.forEach((b) => {
        b.removeNumber(n);
        if (b.hasBingo()) {
          winningNumber = n;
          winningSum = b.getSumOfBoard();
          throw BreakException;
        }
      });
    });
  } catch {
    // exited early
  }

  return winningSum * winningNumber;
}

export function parseInput(input: string) {
  const rows = input.split("\n");
  const numbers = rows[0];

  rows.splice(0, 2);
  let boards: Board[] = [];
  let currentBoard = new Board();

  rows.forEach((row) => {
    const cleanRow = row.trim();

    if (cleanRow) {
      const boardRow = cleanRow
        .split(" ")
        .filter((s) => s)
        .map((n) => +n);
      boardRow.forEach((n, i) => {
        if (currentBoard.columns.length < i + 1) {
          currentBoard.columns[i] = [];
        }
        currentBoard.columns[i].push(n);
      });
      currentBoard.rows.push(boardRow);
    } else {
      boards.push(currentBoard);
      currentBoard = new Board();
    }
  });

  boards.push(currentBoard);

  return {
    numbers: numbers.split(",").map((n) => +n),
    boards,
  };
}

export function day4_2(input: string = day4_input): number {
  let { numbers, boards } = parseInput(input);

  let winningNumber = 0;
  let winningSum = 0;

  numbers.forEach((n) => {
    boards
      .filter((board) => !board.hasWon)
      .forEach((board) => {
        board.removeNumber(n);
        if (board.hasBingo()) {
          winningSum = board.getSumOfBoard();
          winningNumber = n;
          board.hasWon = true;
        }
      });
  });

  return winningSum * winningNumber;
}
