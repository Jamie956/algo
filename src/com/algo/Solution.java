package com.algo;

import com.dataSctruct.ListNode;
import com.dataSctruct.TreeNode;

import java.util.ArrayList;
import java.util.List;

public class Solution {
    /**
     * 111. Minimum Depth of Binary Tree
     * Given a binary tree, find its minimum depth.
     * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
     * <p>
     * Note: A leaf is a node with no children.
     */
    public int minDepth(TreeNode root) {
        if (root == null) return 0;

        int l = minDepth(root.left);
        int r = minDepth(root.right);

        if (l != 0 && r != 0) {
            return Math.min(l, r) + 1;
        } else {
            return Math.max(l, r) + 1;
        }
    }

    /**
     * Definition for singly-linked list.
     * public class ListNode {
     * int val;
     * ListNode next;
     * ListNode(int x) { val = x; }
     * }
     * head:
     * null
     * 1
     * 1->2
     * 1->2->3
     */
    public static ListNode deleteDuplicates(ListNode head) {
        if (head == null) return null;
        if (head.next == null) return head;

        ListNode cur = head;
        while (cur.next != null) {
            if (cur.val == cur.next.val) {
                cur.next = cur.next.next;
            } else {
                cur = cur.next;
            }
        }
        return head;
    }

    /*

     */
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

    /**
     * 100. Same Tree
     * Given two binary trees, write a function to check if they are the same or not.
     */
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if ((p == null) && (q == null)) return true;
        if ((p == null) || (q == null)) return false;
        if (p.val != q.val) return false;

        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    /*

     */
    public int mySqrt(int a) {
        long x = a;

        while (x * x > a) {
            x = (x + a / x) / 2;
        }

        return (int) x;
    }

    /*

     */
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> list = new ArrayList<>();
        List<List<Integer>> ret = new ArrayList<>();
        recursion(root, 0, list);

        for (int i = list.size() - 1; i >= 0; i--) {
            ret.add(list.size() - 1 - i, list.get(i));
        }
        return ret;
    }

    public void recursion(TreeNode root, int level, List<List<Integer>> list) {
        if (root == null) return;
        if (level >= list.size()) list.add(new ArrayList());

        if (root != null) list.get(level).add(root.val);
        if (root.left != null) recursion(root.left, level + 1, list);
        if (root.right != null) recursion(root.right, level + 1, list);
    }

    /**
     * 108. Convert Sorted Array to Binary Search Tree
     * Given an array where elements are sorted in ascending order,
     * convert it to a height balanced BST.
     * <p>
     * Using the value of sort array element in middle index as root node,
     * then recursion, need to know left and right border,
     * to find middle index element in that range.
     */
    public TreeNode sortedArrayToBST(int[] nums) {
        TreeNode root = recursion(nums, 0, nums.length - 1);
        return root;
    }

    private TreeNode recursion(int[] nums, int from, int to) {
        if (from > to) return null;
        int p = (from + to) / 2;
        TreeNode root = new TreeNode(nums[p]);
        root.left = recursion(nums, from, p - 1);
        root.right = recursion(nums, p + 1, to);

        return root;
    }

    /**
     * 112. Path Sum
     * Given a binary tree and a sum, determine if the tree has a root-to-leaf path
     * such that adding up all the values along the path equals the given sum.
     * <p>
     * Note: A leaf is a node with no children.
     */
    public boolean hasPathSum(TreeNode root, int sum) {
        if (root == null) return false;
        if (root.left == null && root.right == null) return root.val - sum == 0 ? true : false;

        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
}
