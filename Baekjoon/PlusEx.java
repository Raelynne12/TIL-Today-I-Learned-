package TIL;
import java.util.Scanner;

public class PlusEx {
	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		int total = sc.nextInt();
		int sum[] = new int[total];
		int A[] = new int[total];
		int B[] = new int[total];
		for(int i = 0; i < total; i++)
		{
			int a = sc.nextInt();
			int b = sc.nextInt();
			sum[i] = a + b; 
			A[i] = a;
			B[i] = b;
		}
		for(int i = 0; i < total; i++)
		{
			System.out.println("Case #" + (i+1) + ": " + A[i] + " + " + B[i]+ " = " + sum[i]);
		}
	}

}
