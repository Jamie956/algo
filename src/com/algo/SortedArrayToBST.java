package com.algo;

/*
108. Convert Sorted Array to Binary Search Tree
Given an array where elements are sorted in ascending order,
convert it to a height balanced BST.

Using the value of sort array element in middle index as root node,
then recursion, need to know left and right border,
to find middle index element in that range.
 */
public class SortedArrayToBST {

    public static void main(String[] args) {
        int[] arr = {-10, -3, 0, 5, 9};
        new SortedArrayToBST().sortedArrayToBST(arr);
    }

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
}
