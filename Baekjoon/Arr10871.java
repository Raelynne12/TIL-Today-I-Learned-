package TIL;

import java.util.Scanner;

public class Arr10871 {
	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int x = sc.nextInt();
		int arr[] = new int[n];
		//int count[] =;
		for(int i = 0; i < n; i++)
		{
			arr[i] = sc.nextInt();
		}
		for(int i = 0; i < n; i++)
		{
			if(x > arr[i])
			{
				System.out.printf(arr[i] + " ");
			}
		}
	}

}
