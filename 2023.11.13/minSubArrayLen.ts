// O(n)
function minSubArrayLen1(target: number, nums: number[]): number {
  const MAX_NUM = Math.pow(10, 9);
  const len = nums.length;
  let start = 0;
  let end = 1;
  let sum = nums[0];
  let minLen = MAX_NUM;

  while (start < len) {
    if (sum < target) {
      if (end === len) {
        break;
      }

      sum += nums[end++];
      continue;
    }

    minLen = Math.min(minLen, end - start);
    sum -= nums[start++];
  }

  return minLen === MAX_NUM ? 0 : minLen;
}

// O(nlogn)
function minSubArrayLen(target: number, nums: number[]): number {
  const len = nums.length;
  let rangeStart = 0;
  let rangeEnd = len + 1;
  let pointer = len;
  let answer = 0;

  while (rangeEnd - rangeStart > 1) {
    let sum = nums.slice(0, pointer).reduce((a, b) => a + b, 0);
    let passed = false;

    for (let i = 0; i < len - pointer + 1; i++) {
      if (sum >= target) {
        passed = true;
        break;
      }
      sum = sum - nums[i] + (nums[i + pointer] ?? 0);
    }

    let pointerValue = pointer;
    if (passed) {
      pointer = Math.floor((pointer - rangeStart) / 2);
      rangeEnd = pointerValue;
      answer = pointerValue;
    } else {
      pointer += Math.floor((rangeEnd - pointer) / 2);
      rangeStart = pointerValue;
    }
  }

  return answer;
}
