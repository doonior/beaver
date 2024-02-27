function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;
    let sum = numbers[left] + numbers[right];

    while (sum !== target) {
        if (sum < target) {
            left += 1;
        } else {
            right -= 1;
        }

        sum = numbers[left] + numbers[right];
    }

    return [left + 1, right + 1];
};
