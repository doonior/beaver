function networkDelayTime(times: number[][], n: number, k: number): number {
  const minTimes = [];
  const visited = [];
  for (let i = 0; i < n; i++) {
    visited[i] = false;
    if (i === k - 1) {
      minTimes[i] = 0;
    } else {
      minTimes[i] = Infinity;
    }
  }

  while (!visited.every((v) => v)) {
    const filteredMinTimes = minTimes.filter((_, i) => !visited[i]);
    const time = Math.min(...filteredMinTimes);
    if (time === Infinity) {
      return -1;
    }
    const index = minTimes.findIndex((v, i) => v === time && !visited[i]);
    const filteredTimes = times.filter((v) => v[0] === index + 1);
    filteredTimes.forEach((v) => {
      minTimes[v[1] - 1] = Math.min(minTimes[v[1] - 1], time + v[2]);
    });
    visited[index] = true;
  }

  return Math.max(...minTimes);
}
