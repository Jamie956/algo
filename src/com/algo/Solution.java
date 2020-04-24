package com.algo;

public class Solution {
    public static void main(String[] args) {
        System.out.println(mysqrt(9));
    }

    public static int mysqrt(int a){
        long x=a;

        while (x*x>a){
            x = (x + a/x)/2;
        }

        return (int) x;
    }

}
