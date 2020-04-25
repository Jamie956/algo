package com.algo;

public class MySqrt {
    public static void main(String[] args) {
        System.out.println(mySqrt(10));
    }

    public static int mySqrt(int a) {
        long x = a;

        while (x * x > a) {
            x = (x + a / x) / 2;
        }

        return (int) x;
    }
}
