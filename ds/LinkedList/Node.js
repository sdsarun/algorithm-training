class Node {
    #data;
    #next;
    #prev;

    constructor(data, next, prev) {
        this.#data = data;
        this.#next = next;
        this.#prev = prev;
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

    getPrev() {
        return this.#prev;
    }

    setPrev(prev) {
        this.#prev = prev;
    }
}

export default Node;
