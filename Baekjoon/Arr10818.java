//package TIL;

import java.util.Arrays;
import java.util.Scanner;

public class Arr10818 {
	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		/*int a = sc.nextInt();
		int arr[] = new int[a];
		int min = 1000000;
		int max = 0;
		for(int i = 0; i < a; i++)
		{
			arr[i] = sc.nextInt();
		}
		for(int i = 0; i < a; i++)
		{

			if(arr[i] < min) min = arr[i];
			if(arr[i] > max) max = arr[i];
		}
		System.out.println(min + " " + max);*/
		
		int n = sc.nextInt();
		int arr[] = new int[n];
		
		for(int i = 0; i < n; i++)
		{
			arr[i] = sc.nextInt();
		}
		Arrays.sort(arr);
		System.out.println(arr[0] + " " + arr[n-1]);
	}

}
