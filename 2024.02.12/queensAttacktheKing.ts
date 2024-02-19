function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
    const answer = [];

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (!i && !j) {
                continue;
            }

            let [x, y] = king;
            
            do {
                x += i;
                y += j;

                if (queens.some(([qx, qy]) => qx === x && qy === y)) {
                    answer.push([x, y]);
                    break;
                }
            } while (x >= 0 && x < 8 && y >= 0 && y < 8);
        }
    }

    return answer;
};
