function minCostConnectPoints(points: number[][]): number {
  const n = points.length;
  const edges = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const [xi, yi] = points[i];
      const [xj, yj] = points[j];
      const distX = Math.abs(xi - xj);
      const distY = Math.abs(yi - yj);
      const cost = distX + distY;
      edges.push([i, j, cost]);
    }
  }
  edges.sort((a, b) => a[2] - b[2]);

  let root = [];

  function isConnected(a: number, b: number) {
    return root[a] !== undefined && root[a] === root[b];
  }

  function connect(a: number, b: number) {
    if (root[a] === undefined && root[b] === undefined) {
      root[a] = root[b] = a;
      return;
    }

    if (root[b] === undefined) {
      root[b] = root[a];
      return;
    }

    if (root[a] === undefined) {
      root[a] = root[b];
      return;
    }

    const val = root[b];
    for (let i = 0; i < root.length; i++) {
      if (root[i] === val) {
        root[i] = root[a];
      }
    }
  }

  let counter = 0;
  let totalCost = 0;
  for (let i = 0; i < edges.length; i++) {
    if (counter === n - 1) {
      break;
    }

    const [a, b, cost] = edges[i];
    const connected = isConnected(a, b);

    if (connected) {
      continue;
    }

    connect(a, b);
    totalCost += cost;
    counter += 1;
  }

  return totalCost;
}
