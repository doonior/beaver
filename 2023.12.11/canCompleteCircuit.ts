function canCompleteCircuit(gas: number[], cost: number[]): number {
  const gasSum = gas.reduce((a, b) => a + b);
  const costSum = cost.reduce((a, b) => a + b);

  if (gasSum < costSum) {
    return -1;
  }

  const n = gas.length;
  let start = 0;
  let end = 0;
  let remain = 0;

  do {
    if (remain >= 0) {
      remain += gas[end] - cost[end];
      end = (end + 1) % n;
    } else {
      start = start ? start - 1 : n - 1;
      remain += gas[start] - cost[start];
    }
  } while (start !== end);

  return start;
}
