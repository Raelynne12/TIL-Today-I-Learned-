package TIL;
import java.util.Scanner;

public class Star {
	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int star[] = new int[a];
		/*for(int i = 1; i <= a; i++)
		{
			for(int j = 1; j <= i; j++)
			{
				System.out.printf("*");
			}
			System.out.println();
		}*/
		for(int i = 1; i <= a; i++)
		{
			for(int j = 1; j<= a-i; j++)
			{
				System.out.printf(" ");
			}
			for(int j = 1; j <= i; j++)
				System.out.printf("*");
			System.out.println();
		}
		
	}
	

}
