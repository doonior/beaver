/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let x = m - 1;
  let y = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (y < 0 || nums1[x] > nums2[y]) {
      nums1[i] = nums1[x];
      x--;
    } else {
      nums1[i] = nums2[y];
      y--;
    }
  }
}
