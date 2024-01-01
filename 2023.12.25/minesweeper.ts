function reveal(r: number, c: number, board: string[][]) {
  if (board[r][c] !== "E") {
    return;
  }

  let count = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        continue;
      }

      const rowIndex = r - i;
      const colIndex = c - j;

      if (
        rowIndex < 0 ||
        rowIndex >= board.length ||
        colIndex < 0 ||
        colIndex >= board[0].length
      ) {
        continue;
      }

      if (board[rowIndex][colIndex] === "M") {
        count += 1;
      }
    }
  }

  board[r][c] = (count || "B").toString();

  if (count) {
    return;
  }

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        continue;
      }

      const rowIndex = r - i;
      const colIndex = c - j;

      if (
        rowIndex < 0 ||
        rowIndex >= board.length ||
        colIndex < 0 ||
        colIndex >= board[0].length
      ) {
        continue;
      }

      if (board[rowIndex][colIndex] === "E") {
        reveal(rowIndex, colIndex, board);
      }
    }
  }
}

function updateBoard(board: string[][], click: number[]): string[][] {
  const [r, c] = click;

  if (board[r][c] === "M") {
    board[r][c] = "X";
    return board;
  }

  reveal(r, c, board);

  return board;
}
