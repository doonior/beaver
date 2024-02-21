class RandomizedSet {
    map: Map<number, number>;
    array: Array<number>;

    constructor() {
        this.map = new Map();
        this.array = [];
    }

    insert(val: number): boolean {
        if (this.map.has(val)) {
            return false;
        }

        this.map.set(val, this.array.length);
        this.array.push(val);
        return true;
    }

    remove(val: number): boolean {
        const index = this.map.get(val);

        if (index === undefined) {
            return false;
        }

        const lastValue = this.array.pop();

        if (val !== lastValue) {
            this.array[index] = lastValue;
            this.map.set(lastValue, index);
        }

        this.map.delete(val);
        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.array.length);
        return this.array[randomIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
