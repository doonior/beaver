import fs from "fs";

const input = fs
  .readFileSync("stdin")
  .toString()
  .split("\r\n")
  .map((v) => v.split(""));

function validate(x: number, y: number, candidate: string) {
  const xStart = Math.floor(x / 3) * 3;
  const yStart = Math.floor(y / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (input[xStart + i][yStart + j] === candidate.toString()) {
        return false;
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    if (input[x][i] === candidate || input[i][y] === candidate) {
      return false;
    }
  }

  return true;
}

function sudoku(k: number) {
  if (k === 81) {
    input.forEach((row) => {
      console.log(row.join(""));
    });

    return true;
  }

  const x = Math.floor(k / 9);
  const y = k % 9;

  if (input[x][y] !== "0") {
    return sudoku(k + 1);
  }

  for (let i = 1; i < 10; i++) {
    const candidate = i.toString();

    if (!validate(x, y, candidate)) {
      continue;
    }

    input[x][y] = candidate;

    if (sudoku(k + 1)) {
      return true;
    }

    input[x][y] = "0";
  }

  return false;
}

sudoku(0);
