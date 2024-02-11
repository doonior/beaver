function findPeakElement(nums: number[]): number {
    let start = 0;
    let end = nums.length - 1;

    if (nums.length === 1 || nums[start] > nums[start + 1]) {
        return start;
    }

    if (nums[end] > nums[end - 1]) {
        return end;
    }

    while (end - start) {
        const middle = start + Math.floor((end - start) / 2);
        const isLeftAsc = nums[middle] > nums[middle - 1];
        const isRightDesc = nums[middle] > nums[middle + 1];
        
        if (isLeftAsc && isRightDesc) {
            return middle;
        }

        if (!isLeftAsc) {
            end = middle;
            continue;
        }

        start = middle;
    }
};
