function merge(arr1: number[], arr2: number[]) {
  const sortedArr = [];
  let i = 0;
  let j = 0;
  const length = arr1.length + arr2.length;

  while (sortedArr.length < length) {
    if (i === arr1.length) {
      sortedArr.push(arr2[j++]);
      continue;
    }

    if (j === arr2.length) {
      sortedArr.push(arr1[i++]);
      continue;
    }

    if (arr1[i] <= arr2[j]) {
      sortedArr.push(arr1[i++]);
      continue;
    }

    sortedArr.push(arr2[j++]);
  }

  return sortedArr;
}

function sortArray(nums: number[]): number[] {
  if (nums.length === 1) {
    return nums;
  }

  const center = Math.floor(nums.length / 2);

  const arr1 = sortArray(nums.slice(0, center));
  const arr2 = sortArray(nums.slice(center));

  return merge(arr1, arr2);
}
