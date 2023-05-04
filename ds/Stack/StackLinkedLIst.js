import LinkedList from "../LinkedList/LinkedList.js";

class Stack {
    #db; 
    constructor() {
        this.#db = new LinkedList();
    }

    isEmpty() {
        return this.#db.isEmpty();
    }

    peek() {
        if (!this.isEmptpy()) 
            return this.#db.getHead().getData();
        return null;
    }

    pop() {
        if (!this.isEmpty()) {
            let returnValue = this.#db.getHead().getData();
            this.#db.removeFirst();
            return returnValue;
        }
        return null;
    }

    push(value) {
        this.#db.addFirst(value);
    }

    size() {
        return this.#db.size();
    }

    toString() {
        this.#db.printList();
    }
}

const st = new Stack();
st.push(1);
st.push(2);
st.toString();
console.log(st.pop());
console.log(st.pop());