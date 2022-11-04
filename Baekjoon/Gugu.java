package TIL;
import java.util.Scanner;
public class Gugu {
	public static void main(String[] args) {
 
		Scanner in = new Scanner(System.in);	
		int num = in.nextInt();
		int sum[] = new int[num];
		for(int i = 0; i < num; i++)
		{
			int a = in.nextInt();
			int b = in.nextInt();
			
			sum[i] = a+b;
		}
		
		for(int k = 0; k < num; k++)
		{
			System.out.println(sum[k]);
		}
		
		}
	}