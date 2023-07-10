package ds.Tree;

public class BinaryTree<T extends Comparable<T>> {
    private BinaryNode<T> root;

    public BinaryTree() {
        this.root = null;
    }

    public BinaryTree(T item) {
        this.root = new BinaryNode<T>(item);
    }

    public int size() {
        return this.root.size(this.root);
    }

    public int height() {
        return this.root.height(this.root);
    }

    public void makeTree(T item, BinaryTree<T> left, BinaryTree<T> right) {
        this.root = new BinaryNode<T>(item, left.root, right.root);
    }

    private boolean empty() {
        if (root == null) {
            return true;
        }
        return false;
    }
}
