class LFUCache {
  capacity: number;
  cache: Map<
    number,
    {
      value: number;
      count: number;
    }
  >;
  keyStorage: Record<number, Set<number>>;
  leastCount: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
    this.keyStorage = {};
    this.leastCount = 0;
  }

  get(key: number): number {
    const data = this.cache.get(key);

    if (!data) {
      return -1;
    }

    const set1 = this.keyStorage[data.count];
    set1.delete(key);
    let set2 = this.keyStorage[data.count + 1];

    if (!set2) {
      set2 = new Set();
      this.keyStorage[data.count + 1] = set2;
    }

    set2.add(key);

    if (this.leastCount === data.count && set1.size === 0) {
      this.leastCount++;
    }

    data.count++;

    return data.value;
  }

  put(key: number, value: number): void {
    // update
    if (this.get(key) !== -1) {
      this.cache.get(key).value = value;
      return;
    }

    // delete cache
    if (this.cache.size === this.capacity) {
      const set = this.keyStorage[this.leastCount];
      const key = set.values().next().value;
      set.delete(key);
      this.cache.delete(key);
    }

    // insert
    this.leastCount = 1;
    this.cache.set(key, { value, count: 1 });
    let set = this.keyStorage[1];

    if (!set) {
      set = new Set();
      this.keyStorage[1] = set;
    }

    set.add(key);
  }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
