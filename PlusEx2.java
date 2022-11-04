package TIL;

import java.util.Scanner;

public class PlusEx2 {
	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		int a = 1;
		int b = 1;
		int sum[] = {0};
		int total = 0;
		for(int i = 0; ; i++)
		{
			a = sc.nextInt();
			b = sc.nextInt();
			sum[i] = a+b;
			total++;
			if((a == 0) && (b == 0)) break;
		}
		for(int i = 0; i < total; i++)
		{
			System.out.println(sum[i]);
		}
	}
}
