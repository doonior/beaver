function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]);
  let arrowIndex = points[0][1];
  let arrowCount = 1;

  for (let i = 1; i < points.length; i++) {
    if (arrowIndex < points[i][0]) {
      arrowCount++;
      arrowIndex = points[i][1];
    }
  }

  return arrowCount;
}
