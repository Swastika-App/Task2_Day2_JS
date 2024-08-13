class Queue<T> {
    private readonly _queue: T[] = [];
  
    // Enqueue: Add an item to the end of the queue
    enqueue(item: T): void {
      this._queue.push(item);
    }
  
    // Dequeue: Remove an item from the front of the queue
    dequeue(): T | undefined {
      return this._queue.shift();
    }
  
    // Peek: Get the item at the front of the queue without removing it
    get peek(): T | undefined {
      return this._queue[0];
    }
  
    // Get the size of the queue
    get size(): number {
      return this._queue.length;
    }
  }
  
  // Example usage with number type
  const queue = new Queue<number>();
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log(queue.size); // 3
  console.log(queue.peek); // 10
  
  queue.dequeue();
  
  console.log(queue.size); // 2
  console.log(queue.peek); // 20
  
  // Example usage with string type
  const queue2 = new Queue<string>();
  
  queue2.enqueue('a');
  queue2.enqueue('b');
  queue2.enqueue('c');
  
  console.log(queue2.size); // 3
  console.log(queue2.peek); // 'a'
  
  queue2.dequeue();
  
  console.log(queue2.size); // 2
  console.log(queue2.peek); // 'b'
  