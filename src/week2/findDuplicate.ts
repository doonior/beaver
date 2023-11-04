function findDuplicate(nums: number[]): number {
  const obj = {};
  return (
    nums.find((v) => {
      if (obj[v]) {
        return true;
      }
      obj[v] = true;
      return false;
    }) ?? 0
  );
}
