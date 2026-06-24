//Queue avec tableau fixe (Array-based)

class ArrayQueue {
  constructor(size) {
    this.size = size;
    this.data = new Array(size);
    this.front = 0;
    this.rear = 0;
    this.count = 0;
  }

  enqueue(element) {
    if (this.count === this.size) {
      throw new Error("Queue is full");
    }

    this.data[this.rear] = element;
    this.rear = (this.rear + 1) % this.size;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    const value = this.data[this.front];
    this.front = (this.front + 1) % this.size;
    this.count--;
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.data[this.front];
  }

  isEmpty() {
    return this.count === 0;
  }
}

//Queue avec liste chaînée (Linked List)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(element) {
    const node = new Node(element);

    if (this.isEmpty()) {
      this.front = this.rear = node;
      return;
    }

    this.rear.next = node;
    this.rear = node;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    const value = this.front.value;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    return value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}


// Priority Queue avec Min-Heap

class MinHeapPriorityQueue {
  constructor() {
    this.heap = [];
  }

  insert(element) {
    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.isEmpty()) {
      throw new Error("Priority queue is empty");
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return min;
  }

  peekMin() {
    if (this.isEmpty()) {
      throw new Error("Priority queue is empty");
    }
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  // Helpers
  bubbleUp(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] <= this.heap[index]) break;

      [this.heap[parent], this.heap[index]] =
        [this.heap[index], this.heap[parent]];

      index = parent;
    }
  }

  bubbleDown(index) {
    let length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] =
        [this.heap[smallest], this.heap[index]];

      index = smallest;
    }
  }
}

//Priority Queue avec tableau trié (Ordered Array)

class SortedArrayPriorityQueue {
  constructor() {
    this.data = [];
  }

  insert(element) {
    // insertion en ordre croissant
    let i = 0;

    while (i < this.data.length && this.data[i] < element) {
      i++;
    }

    this.data.splice(i, 0, element);
  }

  extractMin() {
    if (this.isEmpty()) {
      throw new Error("Priority queue is empty");
    }
    return this.data.shift();
  }

  peekMin() {
    if (this.isEmpty()) {
      throw new Error("Priority queue is empty");
    }
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

