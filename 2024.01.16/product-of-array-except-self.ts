function productExceptSelf(nums: number[]): number[] {
  const zeroCount = nums.filter((v) => !v).length;
  if (zeroCount > 1) {
    return Array(nums.length).fill(0);
  }
  const productAll = nums.reduce((acc, val) => acc * (val || 1), 1);
  if (!zeroCount) {
    return nums.map((v) => productAll / v);
  }
  return nums.map((v) => (v ? 0 : productAll));
}
