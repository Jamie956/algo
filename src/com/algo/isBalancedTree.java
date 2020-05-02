package com.algo;

import com.dataSctruct.TreeNode;

public class isBalancedTree {
    public static void main(String[] args) {
        TreeNode n1 = new TreeNode(3);
        TreeNode n2 = new TreeNode(9);
        TreeNode n3 = new TreeNode(20);
        TreeNode n4 = new TreeNode(15);
        TreeNode n5 = new TreeNode(7);

        n1.left = n2;
        n1.right = n3;
        n3.left = n4;
        n3.right = n5;


//        TreeNode n6 = new TreeNode(8);
//        n5.left = n6;

        boolean ret = new isBalancedTree().isBalanced(n1);
        System.out.println(ret);
    }

    public boolean isBalanced(TreeNode root) {
        return recursion(root) != -1;
    }

    public int recursion(TreeNode node) {

        if (node == null) return 0;

        int l = recursion(node.left);
        if (l == -1) return -1;

        int r = recursion(node.right);
        if (r == -1) return -1;

        if (Math.abs(l - r) > 1) return -1;

        return Math.max(l, r) + 1;

    }
}