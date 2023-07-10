class Tree {
    constructor() {
        this.left = null;
        this.right = null;
    }
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let output = new String("");

function printPreorder(node) {
    if (!node) return;

    // console.log(node.value);
    output += node.value + " ";
    printPreorder(node.left);
    printPreorder(node.right);
}

function printInOrder(node) {
    if (!node) return;

    printInOrder(node.left);
    // console.log(node.value);
    output += node.value + " ";
    printInOrder(node.right);
}

function printPostOrder(node) {
    if (!node) return;

    printPostOrder(node.left);
    printPostOrder(node.right);
    // console.log(node.value);
    output += node.value + " ";
}


const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(15);
root.right.right = new TreeNode(10);

printPreorder(root);
console.log(output);
output = "";
printInOrder(root);
console.log(output);
output = "";
printPostOrder(root);
console.log(output);

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log("hello WOrld");
    }
    for (let j = 0; j < 10; j++) {
        console.log("Hello World");
    }
}