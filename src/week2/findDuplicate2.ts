function findDuplicate(nums: number[]): number {
  let fast = 0;
  let slow = 0;

  do {
    fast = nums[nums[fast]];
    slow = nums[slow];
  } while (fast !== slow);

  slow = 0;

  while (fast !== slow) {
    fast = nums[fast];
    slow = nums[slow];
  }

  return fast;
}
