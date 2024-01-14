function exist(board: string[][], word: string): boolean {
  const visited = board.map((row) => row.map((v) => false));
  const firstChar = word[0];

  function dfs(r: number, c: number, depth: number) {
    if (depth === word.length) {
      return true;
    }

    return [
      [r - 1, c],
      [r, c - 1],
      [r, c + 1],
      [r + 1, c],
    ]
      .filter(
        ([r, c]) => r >= 0 && r < board.length && c >= 0 && c < board[0].length
      )
      .some(([r, c]) => {
        if (word[depth] === board[r][c] && !visited[r][c]) {
          visited[r][c] = true;
          const result = dfs(r, c, depth + 1);
          if (result) {
            return true;
          }
          visited[r][c] = false;
          return false;
        }
      });
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (firstChar === board[i][j]) {
        visited[i][j] = true;
        const result = dfs(i, j, 1);
        if (result) {
          return true;
        }
        visited[i][j] = false;
      }
    }
  }

  return false;
}
