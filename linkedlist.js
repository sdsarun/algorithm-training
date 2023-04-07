import LinkedList from "./LinkedList/LinkedList.js"

const ll = new LinkedList();

// for (let i = 1; i <= 10; i++) ll.addFirst(i);
let values = [];

ll.addLast(1);
ll.addLast(2);
ll.addLast(3);
ll.addAfter(2, 999);
ll.addAfter(3, 55555);
ll.addAfter(55555, 444444444);
ll.addAfter(1, 111);

ll.printList();