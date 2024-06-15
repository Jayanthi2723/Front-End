public class Array{
    public static void main(String[] args){
      int a=20;
      int b=0;
    try{
      int c=a/b;
      System.out.println(c);
    }
    catch(ArithmaticException e)
    {
      System.out.println("can't divide by zero");
    }  
    }
}