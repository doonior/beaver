function removeDuplicates(nums: number[]): number {
  let pointer = 1;
  let counter = 1;
  let curNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === curNum) {
      if (counter > 1) {
        continue;
      }

      nums[pointer++] = curNum;
      counter++;

      continue;
    }

    curNum = nums[i];
    nums[pointer++] = nums[i];
    counter = 1;
  }

  return pointer;
}
