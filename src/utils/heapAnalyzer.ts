export class MinHeap<T> {
  private heap: T[] = [];
  private compare: (a: T, b: T) => number;

  constructor(compareFunction: (a: T, b: T) => number) {
    this.compare = compareFunction;
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  private heapifyUp(index: number): void {
    const parentIndex = this.getParentIndex(index);
    if (parentIndex >= 0 && this.compare(this.heap[index], this.heap[parentIndex]) < 0) {
      this.swap(index, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  private heapifyDown(index: number): void {
    let smallest = index;
    const leftChild = this.getLeftChildIndex(index);
    const rightChild = this.getRightChildIndex(index);

    if (leftChild < this.heap.length && this.compare(this.heap[leftChild], this.heap[smallest]) < 0) {
      smallest = leftChild;
    }

    if (rightChild < this.heap.length && this.compare(this.heap[rightChild], this.heap[smallest]) < 0) {
      smallest = rightChild;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  insert(item: T): void {
    this.heap.push(item);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin(): T | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);
    return min;
  }

  size(): number {
    return this.heap.length;
  }

  peek(): T | null {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

export function getTopKFrequent(tokens: string[], k: number): Array<[string, number]> {
  const frequency = new Map<string, number>();
  
  // Count frequencies
  for (const token of tokens) {
    frequency.set(token, (frequency.get(token) || 0) + 1);
  }
  
  // Use heap to find top k elements
  const heap = new MinHeap<[string, number]>((a, b) => a[1] - b[1]);
  
  for (const [word, freq] of frequency) {
    if (heap.size() < k) {
      heap.insert([word, freq]);
    } else if (freq > heap.peek()![1]) {
      heap.extractMin();
      heap.insert([word, freq]);
    }
  }
  
  const result: Array<[string, number]> = [];
  while (heap.size() > 0) {
    const item = heap.extractMin();
    if (item) result.unshift(item);
  }
  
  return result;
}