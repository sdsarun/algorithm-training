// array based

class Stack {
    #size;
    #topOfStack;
    #db;

    constructor() {
        this.#size = 0;
        this.#topOfStack = null;
        this.#db = [];
    }

    peek() {
        if (!this.isEmpty()) {
            return this.#topOfStack;
        } 
        return null;
    }

    pop() {
        if (!this.isEmpty()) {
            let returnValue = this.#db.pop();
            this.#size--;
            this.#topOfStack = this.#db[this.#size - 1];
            return returnValue;
        }
        return null;
    }

    push(value) {
        this.#db.push(value);
        this.#topOfStack = value;
        this.#size++;
    }

    isEmpty() {
        return this.#size === 0;
    }

    size() {
        return this.#size;
    }

    toString() {
        return this.#db;
    }
}

