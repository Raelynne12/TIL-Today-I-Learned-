package TIL;

import java.util.Scanner;

public class Chess
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        
        int king = sc.nextInt();
		int queen = sc.nextInt();
		int look = sc.nextInt();
		int bishop = sc.nextInt();
		int knight = sc.nextInt();
		int phone = sc.nextInt();
        
        if(king != 1) king = 1 - king;
        else king = 0;
        
        if(queen != 1) queen = 1 - queen;
        else queen = 0;
        
        if(look != 2) look = 2 - look;
        else look = 0;
        
        if(bishop != 2) bishop = 2 - bishop;
        else bishop = 0;
        
        if(knight != 2) knight = 2 - knight;
        else knight = 0 ;
        
        if(phone != 8) phone = 8 - phone;
        else phone = 0;
        
        System.out.print(king + " " + queen + " " + look + " " + bishop + " " + knight + " " + phone);
    }
}