package ds.Tree;

/**
 * BinaryNode for BinaryTree
 */
public class BinaryNode<T extends Comparable<T>> {
    private T item;
    private BinaryNode<T> left;
    private BinaryNode<T> right;

    public BinaryNode() {
        this.item = null;
        this.left = null;
        this.right = null;
    }

    public BinaryNode(T item) {
        this.item = item;
        this.left = null;
        this.right = null;
    }

    public BinaryNode(T item, BinaryNode<T> left, BinaryNode<T> right) {
        this.item = item;
        this.left = left;
        this.right = right;
    }

    public int size(BinaryNode<T> node) {
        if (node == null) {
            return 0;
        }
        return this.size(node.left) + this.size(node.right) + 1;
    }

    public int height(BinaryNode<T> node) {
        if (node == null) {
            return -1;
        }
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }

    public void printPreorder() {
        System.out.print(this.item + " ");
        if (this.left != null) {
            this.left.printPreorder();
        }
        if (this.right != null) {
            this.right.printPreorder();
        }
    }

    public static void main(String[] args) {
        BinaryNode<Integer> leftNode = new BinaryNode<>(20);
        BinaryNode<Integer> rightNode = new BinaryNode<>(30);

        BinaryNode<Integer> root = new BinaryNode<Integer>(10, leftNode, rightNode);
        root.printPreorder();
    }
}