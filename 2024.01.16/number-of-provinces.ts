function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const parent = Array.from({ length: n }, (_, i) => i);
  let provinceCount = n;

  function union(a: number, b: number) {
    const aRoot = find(a);
    const bRoot = find(b);
    if (aRoot === bRoot) return;
    parent[bRoot] = aRoot;
    provinceCount -= 1;
  }

  function find(a: number) {
    while (parent[a] !== a) {
      a = parent[a];
    }
    return a;
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (!isConnected[i][j]) continue;
      union(i, j);
    }
  }

  return provinceCount;
}
