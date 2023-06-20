package ds.Array;

public class IntegerArray {
    private int[] database;
    private int size;
    private int length;

    public IntegerArray() {
        this(0);
    }

    public boolean isEmpty() {
        return this.length == 0;
    }

    public int length() {
        return this.length;
    }

    public int size() {
        return this.size;
    }

    public IntegerArray(int size) {
        this.database = new int[size];
        this.size = size;
    }

    public void add(int element) {
        this.ensureCapacity(this.length + 1);
        this.database[this.length] = element;
        this.length++;
    }

    private boolean ensureCapacity(int length) {
        if (length > this.size) {
            System.out.println("Enpand array.");
            int[] arrayExtend = new int[(this.size + 1) * 2];
            for (int i = 0; i < this.size; i++) {
                arrayExtend[i] = this.database[i];
            }
            this.database = arrayExtend;
            this.size = this.database.length;
            return true;
        }
        return false;
    }

    public void removeAt() {
    }

    public String toString() {
        StringBuilder output = new StringBuilder();
        int i = 0;
        for (int current : this.database) {
            if (i != this.size) {
                output.append(current + " ");
            } else {
                output.append(current);
            }
            i++;
        }
        System.out.println("Hello World");
        return output.toString();
    }
}