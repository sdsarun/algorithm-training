package ds.Array;

public class Test {
    public static void main(String[] args) {
        IntegerArray arr = new IntegerArray();
        for (int i = 0; i < 10000; i++) {
            arr.add(i + 1);
        }
        System.out.println(arr);
    }
}
