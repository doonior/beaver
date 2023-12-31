/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  const depth = Math.floor(n / 2);

  for (let i = 0; i < depth; i++) {
    for (let j = i; j < n - i - 1; j++) {
      [
        matrix[i][j],
        matrix[j][n - i - 1],
        matrix[n - i - 1][n - j - 1],
        matrix[n - j - 1][i],
      ] = [
        matrix[n - j - 1][i],
        matrix[i][j],
        matrix[j][n - i - 1],
        matrix[n - i - 1][n - j - 1],
      ];
    }
  }
}
