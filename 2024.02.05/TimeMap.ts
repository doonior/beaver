class TimeMap {
    map: Map<string, Array<[number, string]>>;

    constructor() {
        this.map = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        const array = this.map.get(key);

        if (!array) {
            this.map.set(key, [[timestamp, value]]);
            return;
        }

        array.push([timestamp, value]);
    }

    get(key: string, timestamp: number): string {
        const array = this.map.get(key);

        if (!array || array[0][0] > timestamp) {
            return '';
        }

        let start = 0;
        let end = array.length - 1;

        if (array[end][0] <= timestamp) {
            return array[end][1];
        }

        while (end - start > 1) {
            const middle = start + Math.floor((end - start) / 2);
            const middleTimestamp = array[middle][0];
            
            if (middleTimestamp === timestamp) {
                return array[middle][1];
            }

            if (middleTimestamp > timestamp) {
                end = middle;
                continue;
            }

            start = middle;
        }
        
        return array[start][1];
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
