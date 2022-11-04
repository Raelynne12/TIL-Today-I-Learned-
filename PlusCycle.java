package TIL;

import java.util.Scanner;

public class PlusCycle {
	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		int total = sc.nextInt();
		int last = 0;
		int i = 0;
		int j = 1;
		
		int a = total/10;
		int b = total % 10;
		
		while(total != j)
		{
			
			i = a + b;
			j = b*10+(i%10);
			last++;
			a = j/10; //10의 자리 
			b = j%10; //1의 자리
		}
		
		System.out.println(last);
		
	}

}

/*
 * 
 * import java.util.Scanner;
 
public class Main {
 
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
 
		int N = in.nextInt();
		in.close();
        
		int cnt = 0;
		int copy = N;
        
		while (true) {
			N = ((N % 10) * 10) + (((N / 10) + (N % 10)) % 10);
			cnt++;
 
			if (copy == N) {
				break;
			}
		}
		System.out.println(cnt);
	}
}
 */
