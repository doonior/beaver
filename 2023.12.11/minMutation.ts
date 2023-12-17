function minMutation(
  startGene: string,
  endGene: string,
  bank: string[]
): number {
  const INVALID = 100;
  const visited: string[] = [];

  function dfs(gene): number {
    if (gene === endGene) {
      return visited.length;
    }

    if (visited.includes(gene)) {
      return INVALID;
    }

    visited.push(gene);
    const resultNumbers = bank
      .filter((v) => {
        let changed = false;
        for (let i = 0; i < 8; i++) {
          if (gene[i] === v[i]) {
            continue;
          }
          if (changed) {
            return false;
          }
          changed = true;
        }
        return changed;
      })
      .map((v) => dfs(v));
    visited.pop();

    return Math.min(...resultNumbers, INVALID);
  }

  const result = dfs(startGene);
  return result === INVALID ? -1 : result;
}
