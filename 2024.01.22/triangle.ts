function minimumTotal(triangle: number[][]): number {
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i - 1][j - 1] ?? Infinity, triangle[i - 1][j] ?? Infinity);
        }
    }

    return Math.min(...triangle[triangle.length - 1]);
};
