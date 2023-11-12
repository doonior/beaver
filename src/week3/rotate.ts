/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // 방법1.
  // for (let i = k % nums.length; i > 0; i--) {
  //   nums.unshift(nums.pop()!);
  // }

  // 방법2.
  const step = k % nums.length;
  const rotatedNums = [...nums.slice(-step), ...nums.slice(0, -step)];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = rotatedNums[i];
  }
}
