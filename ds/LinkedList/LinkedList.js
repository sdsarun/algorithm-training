import Node from "./Node.js"

class LinkedList {
    #size;
    #head;
    #tail;

    constructor() {
        this.#size = 0;
        this.#head = null;
        this.#tail = null;
    }

    // remove first occur found.
    removeAt(target) {
        if (this.isEmpty()) return false;

        if (this.#head.getData() === target) {
            this.#head = this.#head.getNext();
            this.#size--;
            console.log("remove first");
            return true;
        } else {
            let temp = this.#head;
            while (temp.getNext() !== null && temp.getNext().getData() !== target) {
                temp = temp.getNext();
            } 
            if (temp !== null) {
                temp.setNext(temp.getNext().getNext());
                console.log("remove after");
                return true;
            }
        }

        return false;
    }

    removeFirst() {
        if (this.isEmpty()) return null;
        let returnValue = this.#head.getData();
        this.#head = this.#head.getNext();
        this.#size--;
        return returnValue;
    }

    removeLast() {
        if (this.isEmpty()) return null;

        let returnValue;
        if (this.#size === 1) {
            returnValue = this.#head.getData();     
            this.#head = null;
            this.#tail = null;
            this.#size--;
            return returnValue;
        }

        let temp = this.#head;
        while (temp !== null) {
            if (temp.getNext() === this.#tail) {
                returnValue = temp.getNext().getData();
                temp.setNext(null);
                this.#tail = temp;
                this.#size--;
                return returnValue;
            }
            temp = temp.getNext();
        }
        return returnValue;
    }

    contains(target) {
        let found = false;
        let temp = this.#head;
        while (temp !== null) {
            if (temp.getData() === target) {
                found = true;
                break;
            } 
            temp = temp.getNext();
        }    
        return found;
    }

    getHead() {
        return this.#head;
    }

    getTail() {
        return this.#tail;
    }

    size() {
        return this.#size;
    }

    isEmpty() {
        return this.#size === 0;
    }

    // if not found just add last
    addAfter(target, value) {

        // if list is empty.
        if (this.isEmpty()) {
            this.addLast(value);
            console.log("addFirst()");
            this.#size++;
            return;
        }

        let temp = this.#head;
        while (temp !== null && temp.getData() !== target) {
            temp = temp.getNext();
        }

        // found
        if (temp !== null) {
            if (temp.getNext() === null) {
                this.addLast(value);
            } else {
                let newNode = new Node(value, temp.getNext());
                temp.setNext(newNode);
            }
        } else {
            this.addLast(value);
        }
        this.#size++;
    }

    addFirst(newValue) {
        this.#head = new Node(newValue, this.#head);
        if (this.#tail === null) {
            this.#tail = this.#head;
        }
        this.#size++;
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
        this.#size++;
    }

    printList() {
        let temp = this.#head;
        while (temp !== null) {
            console.log(temp.getData());
            temp = temp.getNext();
        }
    }
}

export default LinkedList;
