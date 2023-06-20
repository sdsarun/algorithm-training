class Karray {
    #database;
    #size;
    constructor() {
        this.#database = [];
        this.#size = 0;
    }

    isEmpty() {
        return this.#size === 0;
    }

    get(index) {
        if (this.isEmpty() || (index < 0 || index >= this.#size)) {
            return null;
        }
        return this.#database[index];
    }

    add(element) {
        this.#database.push(element);
        this.#size++;
    }

    remove(element) {
        for (let i = 0; i < this.#size; i++) {
            
        }
    }

    removeAt(index) {
        let val = this.get(index);
        if (!val) return false;
    }

    size() {
        return this.#size;
    }
}

const map = new Map();

const arr = new Karray();
arr.add(10);
arr.add(20);
console.log(arr.size());
console.log(arr.get(2));