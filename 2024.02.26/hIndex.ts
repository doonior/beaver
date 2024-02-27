function hIndex(citations: number[]): number {
    const n = citations.length;
    const countMap = Array(n + 1).fill(0);
    
    citations.forEach((citation) => {
        const index = Math.min(citation, n);
        countMap[index] += 1;
    });

    let totalCount = 0;

    for (let i = n; i >= 0; i--) {
        totalCount += countMap[i];
        
        if (totalCount >= i) {
            return i;
        }
    }

    return 0;
};
