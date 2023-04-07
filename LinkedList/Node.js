class Node {
    #data;
    #next;

    constructor(data, next) {
        this.#data = data;
        this.#next = next;
    }

    setData(data) {
        this.#data = data;
    }

    getData() {
        return this.#data;
    }

    setNext(next) {
        this.#next = next;
    }

    getNext() {
        return this.#next;
    }
}

class LinkedList {
    #size;
    #head;
    #tail;

    constructor() {
        this.#size = 0;
        this.#head = null;
        this.#tail = null;
    }

    size() {
        return this.#size;
    }

    isEmpty() {
        return this.#size === 0;
    }

    addFirst(newValue) {
        let newNode = new Node(newValue, null);
        if (this.#head === null) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.setNext(this.#head);
            this.#head = newNode;
        }
    }

    addLast(newValue) {
        let newNode = new Node(newValue, null);
        if (this.#head === null) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.setNext(newNode);
            this.#tail = newNode;
        }
    }

    printList() {
        let temp = this.#head;
        while (temp !== null) {
            console.log(temp.getData());
            temp = temp.getNext();
        }
    }
}

export { LinkedList  };