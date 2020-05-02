package com.algo;

import com.dataSctruct.TreeNode;

public class Solution {
    public static void main(String[] args) {
        test();
    }

    private static void test() {
        TreeNode n1 = new TreeNode(3);
        TreeNode n2 = new TreeNode(9);
        TreeNode n3 = new TreeNode(20);
        TreeNode n4 = new TreeNode(15);
        TreeNode n5 = new TreeNode(7);

        n1.left = n2;
        n1.right = n3;
        n3.left = n4;
        n4.right = n5;

        int ret = new Solution().minDepth(n1);
        System.out.println(ret);
    }

    /*
    111. Minimum Depth of Binary Tree
    Given a binary tree, find its minimum depth.
    The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

    Note: A leaf is a node with no children.
     */

    /**
     * Definition for a binary tree node.
     * public class TreeNode {
     * int val;
     * TreeNode left;
     * TreeNode right;
     * TreeNode(int x) { val = x; }
     * }
     */
    private int minDepth(TreeNode root) {
        if (root == null) return 0;

        int l = minDepth(root.left);
        int r = minDepth(root.right);

        if (l != 0 && r != 0) {
            return Math.min(l, r) + 1;
        } else {
            return Math.max(l, r) + 1;
        }
    }

}
