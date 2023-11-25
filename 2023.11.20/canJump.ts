function canJump(nums: number[]): boolean {
  let zeroDetected = false;
  let counter = 0;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (zeroDetected) {
      if (nums[i] > counter) {
        zeroDetected = false;
        counter = 0;
        continue;
      }

      counter++;
      continue;
    }

    if (nums[i] === 0) {
      zeroDetected = true;
      counter = 1;
    }
  }

  return !zeroDetected;
}
