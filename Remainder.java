package TIL;
import java.util.Scanner;

public class Remainder {

	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		int c = sc.nextInt();
		
		int A = (a+b)%c;
		int B = ((a%c) + (b%c))%c;
		int C = (a*b)%c;
		int D = ((a%c) * (b%c))%c;
		
		System.out.println(A);
		System.out.println(B);
		System.out.println(C);
		System.out.println(D);
	}
}
