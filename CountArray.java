package TIL;

import java.util.Scanner;

public class CountArray {
	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		int arr[] = new int[num];
		for(int i = 0; i < num; i++) {
			arr[i] = sc.nextInt();
		}
		int count = 0;
		int find = sc.nextInt();
		for(int i = 0; i < num; i++)
		{
			if(find == arr[i]) count ++;
		}
		System.out.println(count);
	}

}
