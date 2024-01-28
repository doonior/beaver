function reachNumber(target: number): number {
    target = Math.abs(target);
    let sum = 0;
    let n = 0;

    while (sum < target) {
        n += 1;
        sum += n;
    }

    const gap = sum - target;

    return gap % 2 ? n % 2 ? n + 2 : n + 1 : n;
};
