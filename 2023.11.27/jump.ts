function jump(nums: number[]): number {
  let count = 0;
  let pointer = nums.length - 1;

  while (pointer > 0) {
    count++;
    for (let i = 0; i < pointer; i++) {
      if (nums[i] >= pointer - i) {
        pointer = i;
        break;
      }
    }
  }

  return count;
}
