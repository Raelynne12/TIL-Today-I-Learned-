package TIL;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;
//import java.io.IOException;

//BufferedReader = Scanner
//Bufferedwriter = syso


public class Hap {
	public static void main(String[] args) throws IOException
	{
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		String s = bf.readLine(); //String
		//int i = Integer.parseInt(bf.readLine()); //int
		
		StringTokenizer st = new StringTokenizer(s);
		int a = Integer.parseInt(st.nextToken());
		int b = Integer.parseInt(st.nextToken());
		
		String array[] = s.split(" ");
		
		/*BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		String a = "abcdefu";
		bw.write(a + '\n'); //자동개행기능이 없어서 개행할 때 이렇게 해야 함
		bw.flush();
		bw.close();*/
	}

}
