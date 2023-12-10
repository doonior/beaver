class MaxHeap {
  heap: Array<number | null>;

  constructor() {
    this.heap = [null];
  }

  push(num: number) {
    this.heap.push(num);
    let index = this.heap.length - 1;
    while (true) {
      const parentIndex = Math.floor(index / 2);

      if (index === 1 || this.heap[index] <= this.heap[parentIndex]) {
        break;
      }

      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  pop(): number {
    const result = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let index = 1;
    while (true) {
      const childIndex = index * 2;

      if (
        childIndex > this.heap.length - 1 ||
        (this.heap[index] >= this.heap[childIndex] &&
          (childIndex + 1 > this.heap.length - 1 ||
            this.heap[index] >= this.heap[childIndex + 1]))
      ) {
        break;
      }

      if (
        childIndex + 1 > this.heap.length - 1 ||
        this.heap[childIndex] >= this.heap[childIndex + 1]
      ) {
        [this.heap[index], this.heap[childIndex]] = [
          this.heap[childIndex],
          this.heap[index],
        ];
        index = childIndex;
        continue;
      }

      [this.heap[index], this.heap[childIndex + 1]] = [
        this.heap[childIndex + 1],
        this.heap[index],
      ];
      index = childIndex + 1;
    }

    return result;
  }
}

function findKthLargest(nums: number[], k: number): number {
  const heap = new MaxHeap();
  nums.forEach((num) => heap.push(num));
  let answer = 0;
  for (let i = 0; i < k; i++) {
    answer = heap.pop();
  }
  return answer;
}
