function trap(height: number[]): number {
    const n = height.length;
    height[-1] = -Infinity;
    height[n] = -Infinity;
    let answer = 0;
    let peaks = [];

    // peak 찾기
    for (let i = 0; i < n; i++) {
        const isPeak = height[i] >= height[i - 1] && height[i] >= height[i + 1];

        if (isPeak) {
            peaks.push(i);
        }
    }

    let eliminated = true;

    // peaks 중 bottom 제거
    while (eliminated) {
        const n = peaks.length;
        peaks[-1] = -1;
        peaks[n] = -1;
        let newPeaks = [];
        eliminated = false;

        for (let i = 0 ; i < n; i++) {
            const isBottom = height[peaks[i]] <= height[peaks[i - 1]] && height[peaks[i]] <= height[peaks[i + 1]];

            if (isBottom) {
                eliminated = true;
                continue;
            }

            newPeaks.push(peaks[i]);
        }

        peaks = newPeaks;
    }

    // water 계산
    for (let i = 0; i < peaks.length - 1; i++) {
        const start = peaks[i];
        const end = peaks[i + 1];
        const h = Math.min(height[start], height[end]);

        for (let j = start + 1; j < end; j++) {
            const water = Math.max(h - height[j], 0);
            answer += water;
        }
    }

    return answer;
};
