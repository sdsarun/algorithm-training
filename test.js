// slow version just using array.
class ArrayPQ {
	constructor(size) {
		this.array = [];
		this.maxIndex = 0;
	}

	isEmpty() {
		return this.array.length === 0;
	}

	size() {
		return this.array.length;
	}

	peek() {
		if (this.isEmpty()) throw new Error("No such element exception.");
		return this.array[this.maxIndex];
	}

	enqueue(obj) {
		// 99
		if (this.isEmpty()) {
			this.maxIndex = 0;
		} else {
			if (this.array[this.maxIndex] < obj) {
				this.maxIndex = this.array.length;
			}
		}
		this.array[this.array.length] = obj;
	}

	dequeue() {
		let result = this.peek();
		this.array.splice(this.maxIndex, 1);
		if (!this.isEmpty()) {
			this.maxIndex = 0;
			for (let i = 1; i < this.array.length; i++) {
				if (this.array[i] > this.array[this.maxIndex]) {
					this.maxIndex = i;
				}
			}
		}
		return result;
	}

	showList() {
		console.log(this.array);
	}
}

const pq = new ArrayPQ();
pq.enqueue(9);
pq.enqueue(11);
pq.enqueue(99);
pq.enqueue(10);
pq.enqueue(100);
pq.showList();
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
//console.log(pq.dequeue());
//console.log(pq.dequeue());

