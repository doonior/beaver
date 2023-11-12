class LRUCache {
  cache: object;
  lru: number[];

  constructor(capacity: number) {
    this.cache = {};
    this.lru = Array(capacity);
  }

  get(key: number): number {
    if (this.cache[key] === undefined) {
      return -1;
    }
    this.lruCache(key);
    return this.cache[key];
  }

  put(key: number, value: number): void {
    this.lruCache(key);
    this.cache[key] = value;
  }

  lruCache(key: number) {
    const index = this.lru.indexOf(key);
    if (index === -1) {
      this.lru.unshift(key);
      const popped = this.lru.pop();
      popped !== undefined && delete this.cache[popped];
    } else if (index > 0) {
      this.lru.splice(index, 1);
      this.lru.unshift(key);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
