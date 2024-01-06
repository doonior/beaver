function partitionString(s: string): number {
  const set = new Set();
  let counter = 1;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (set.has(char)) {
      counter += 1;
      set.clear();
    }
    set.add(char);
  }
  return counter;
}
