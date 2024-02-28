class Heap {
  constructor(sortFunc) {
    this.heap = [null];
    this.sortFunc = sortFunc;
  }

  push(value) {
    this.heap.push(value);
    let index = this.heap.length - 1;
    while (true) {
      const parentIndex = Math.floor(index / 2);

      if (index === 1 || this.sortFunc(this.heap[index], this.heap[parentIndex]) >= 0) {
        break;
      }

      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  pop() {
    const result = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let index = 1;
    while (true) {
      const childIndex = index * 2;

      if (
        childIndex > this.heap.length - 1 ||
        (this.sortFunc(this.heap[index], this.heap[childIndex]) <= 0 &&
          (childIndex + 1 > this.heap.length - 1 ||
            this.sortFunc(this.heap[index], this.heap[childIndex + 1]) <= 0))
      ) {
        break;
      }

      if (
        childIndex + 1 > this.heap.length - 1 ||
        this.sortFunc(this.heap[childIndex], this.heap[childIndex + 1]) <= 0
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

function solution(n, paths, gates, summits) {
    const vertexEdgeMap = Array.from({ length: n + 1 }, () => []);
    gates.forEach((gate) => {
        paths.push([0, gate, 0]);
    });
    paths.forEach(([i, j, w]) => {
        vertexEdgeMap[i].push([j, w]);
        vertexEdgeMap[j].push([i, w]);
    });
    
    const intensityMap = Array(n + 1).fill(Infinity);
    intensityMap[0] = 0;
    const heap = new Heap((a, b) => a[1] - b[1]);
    heap.push([0, 0]);
    let [vertex, intensity] = [0, 0];
    const isSummit = summits.reduce((acc, summit) => {
        acc[summit] = true;
        return acc;
    }, {});
    
    while (true) {
        [vertex, intensity] = heap.pop();
        if (intensityMap[vertex] < intensity) continue;
        if (isSummit[vertex]) break;
        
        const edges = vertexEdgeMap[vertex];
        edges.forEach(([v, w]) => {
            const nextIntensity = Math.max(w, intensity);
            if (intensityMap[v] <= nextIntensity) return;
            intensityMap[v] = nextIntensity;
            heap.push([v, nextIntensity]);
        });
    }
    
    while (true) {
        const next = heap.pop();
        if (!next) break;
        [v, i] = next;
        if (intensityMap[v] < i) continue;
        if (i > intensity) break;
        if (isSummit[v]) {
            vertex = Math.min(vertex, v);
            continue;
        }
        
        const edges = vertexEdgeMap[v];
        edges.forEach(([v, w]) => {
            const nextIntensity = Math.max(w, intensity);
            if (intensityMap[v] <= nextIntensity) return;
            intensityMap[v] = nextIntensity;
            heap.push([v, nextIntensity]);
        });
    }
    
    return [vertex, intensity];
}
