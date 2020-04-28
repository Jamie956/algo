package com.algo;

/*
100. Same Tree
Given two binary trees, write a function to check if they are the same or not.
 */
public class IsSameTree {
    public static void main(String[] args) {
        TreeNode a1 = new TreeNode(1);
        TreeNode a2 = new TreeNode(2);
        TreeNode a3 = new TreeNode(3);
        a1.left = a2;
        a1.right = a3;

        TreeNode b1 = new TreeNode(1);
        TreeNode b2 = new TreeNode(2);
        TreeNode b3 = new TreeNode(2);

        b1.left = b2;
        b1.right = b3;

        boolean ret = isSameTree(a1, b1);
        System.out.println(ret);

    }

    public static boolean isSameTree(TreeNode p, TreeNode q) {
        if ((p == null) && (q == null)) return true;
        if ((p == null) || (q == null)) return false;
        if (p.val != q.val) return false;

        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}


class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}