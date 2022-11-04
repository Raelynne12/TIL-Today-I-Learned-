package TIL;
import java.util.Scanner;

public class Dice {
	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		int c = sc.nextInt();
		int total = 0;
		int max = 0;
		
		if((a == b)&& (a == c)) total = 10000+(a*1000);
		else if((a != b) && (a != c) && (b != c))
		{
			if(a > b)
			{
				if(a > c) max = a;
				else max = c;
			}
			else if(a < b)
			{
				if(b>c) max = b;
				else max = c;
			}
			total = max * 100;
		}
		else
		{
			if((a != b) && (b == c))
			{
				total = 1000 + b * 100;
				
			}
			else if((a == b) && (b != c))
				total = 1000 + b * 100;
			else if((a == c) && (b != a))
				total = 1000 + a * 100;
		}
		System.out.println(total);
	}

}
