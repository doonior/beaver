function groupAnagrams(strs: string[]): string[][] {
  const anagramMap: Record<string, Array<string>> = {};

  strs.forEach((str) => {
    const key = str.split("").sort().join("");
    if (!anagramMap[key]) {
      anagramMap[key] = [];
    }
    anagramMap[key].push(str);
  });

  return Object.values(anagramMap);
}
