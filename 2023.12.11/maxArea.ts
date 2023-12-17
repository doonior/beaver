function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let y = 0;
  let area = 0;

  while (left < right) {
    if (height[left] <= y) {
      left++;
      continue;
    }

    if (height[right] <= y) {
      right--;
      continue;
    }

    y = Math.min(height[left], height[right]);
    area = Math.max(area, (right - left) * y);
  }

  return area;
}
