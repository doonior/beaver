function videoStitching(clips: number[][], time: number): number {
    clips.sort((a, b) => a[0] - b[0]);

    let pointer = 0;
    let nextPointer = 0;
    let counter = 1;

    for (let i = 0; i < clips.length; i++) {
        const [start, end] = clips[i];

        if (start > pointer) {
            if (pointer === nextPointer) {
                return -1;
            }

            pointer = nextPointer;
            counter += 1;
        }

        if (start <= pointer) {
            if (end >= time) {
                return counter;
            }

            nextPointer = Math.max(nextPointer, end);
        }
    }

    if (nextPointer < time) {
        return -1;
    }

    return counter;
};
