public class Methods{
    static String greet(String name){
        return "Hello" + name;
    }
    static int sum(int a, int b){
        return a+b;
    }
    static int multiply(int a, int b){
        return a*b;
    }
    static boolean isEven(int n){
        if(n%2==0) return true;
        else return false;
    }
    static int[] double_array(int[] array){
        int[] doubled_arr = new int[array.length];
        for (int i : array) {
            doubled_arr[i] = array[i] * 2;
        }
        return doubled_arr;
    }
    static int factorials(int n){
        int temp = 1;
        for(int i = 1; i < n; i++){
            temp *= i;
        }
        return temp;
    }
    static int getMax(int a, int b){
        if(a>b) return a;
        else return b;
    }
    static String reverseString(String str){
        String reversed = "";
        for(int i = 0; i < str.length(); i++){
            reversed += str.charAt(i);
        }
        return reversed;
    }
    static boolean isPalindrome(String str){
        String l = "";
        String r = "";
        for(int i = 0; i < str.length(); i++){
            l += str.charAt(i);
            r += str.charAt(str.length()-1-i); 
        }
        return l.equals(r);
    }
    static int[] filterOdd(int[] array){
        int[] filteredArr = new int[array.length];
        int j = 0;
        for (int i : array) {
            if(array[i]%2!=0) continue;
            else {
                filteredArr[j] = array[i];
                j++;
            }
        }
        return filteredArr;
    }
    public static void main(String[] args) {
        System.out.println("Hello :3");      
    }
}