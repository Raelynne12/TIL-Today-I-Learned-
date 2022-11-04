package TIL;

import java.io.*;
import java.util.*;

public class BufferedReaderEx {
	public static void main(String[] args) throws IOException
	{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String str = br.readLine();
		System.out.println(str);
		
		//정수 변환 시
		//int a = Integer.parseInt(str);
		//System.out.println(a);
		
		//문자를 자를 때
		StringTokenizer st = new StringTokenizer(br.readLine());
		String str1 = st.nextToken();
		int b = Integer.parseInt(st.nextToken());
		
		String[] strs = br.readLine().split("");
		
	}

}
