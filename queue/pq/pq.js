// index 0 store max value
// last index store min value
// child left = 2k + 1;
// child right = 2k + 2;
// parent = (k - 1) / 2
class PriorityQueue {
  elementData = [];

  isEmpty() {
    return this.elementData.length === 0;
  }

  enqueue(val) {
    if (this.isEmpty()) {
      return this.elementData.push(val);
    }

    this.elementData.push(val);
    this.fixUp(this.elementData.length - 1);
  }

  dequeue() {
    const result = this.peek();
    this.swap(0, this.elementData.length - 1);
    this.elementData.pop();
    if (this.elementData.length > 0) {
      this.fixDown(0);
    }
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("ElementData is empty.");
    }

    return this.elementData[0];
  }

  fixUp(k) {
    console.log('fix at', k);
    while (k > 0) {
      const p = Math.floor((k - 1) / 2);
      if (!this.moreThan(k, p)) {
        console.log('more than stoping...')
        break;
      }

      this.swap(k, p);
      console.log('swapingg...', this.elementData[k], this.elementData[p]);
      k = p;
      console.log('fixing...');
    }
  }

  fixDown(k) {
  }

  moreThan(a, b) {
    return this.elementData[a] > this.elementData[b];
  }

  swap(a, b) {
    const t = this.elementData[a];
    this.elementData[a] = this.elementData[b];
    this.elementData[b] = t;
  }
}

const pq = new PriorityQueue();
pq.enqueue(16);
pq.enqueue(16);
pq.enqueue(16);
pq.enqueue(16);
pq.enqueue(16);
pq.enqueue(33);
pq.enqueue(43);
//pq.enqueue(13);
//pq.enqueue(12);
//pq.enqueue(1);
//pq.enqueue(2);
//pq.enqueue(12);
//pq.enqueue(16);
//pq.enqueue(16);
console.log(pq);
console.log(pq.peek());
