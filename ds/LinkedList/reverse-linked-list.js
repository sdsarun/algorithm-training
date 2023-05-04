import Node from "./Node.js"

const head = generateList(12);

function generateList(n) {
    let value = 1;
    let tempHead = null;
    for (let i = 1; i <= n; i++) {
        if (tempHead === null) {
            tempHead = new Node(value, null);
        } else {
            tempHead = new Node(value, tempHead);
        }
        value++;
    }
    return tempHead;
}

function printList(head) {
    let temp = head;
    while (temp !== null) {
        console.log(temp.getData());
        temp = temp.getNext();
    }
}

function reverse(head) {
    if (head.getNext() === null || head === null) return;
    
    let temp = head;
}


printList(head);
head = reverse(head);
printList(head);