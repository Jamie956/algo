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

    /**
     * 122. Best Time to Buy and Sell Stock II
     * Say you have an array prices for which the ith element is the price of a given stock on day i.
     * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
     * Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
     */
    public int maxProfit(int[] prices) {
        int profit = 0;
        for (int i = 0; i < prices.length - 1; i++) {
            if (prices[i + 1] - prices[i] > 0) profit += prices[i + 1] - prices[i];
        }
        return profit;
    }

    /**
     * 125. Valid Palindrome
     * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
     * <p>
     * compare digit and alphabet
     */
    public boolean isPalindrome(String s) {
        int h = 0, t = s.length() - 1;
        while (h < t) {
            while (h < t && !((s.charAt(h) >= 'A' && s.charAt(h) <= 'Z') || (s.charAt(h) >= 'a' && s.charAt(h) <= 'z') || (s.charAt(h) >= '0' && s.charAt(h) <= '9'))) {
                h++;
            }
            while (h < t && !((s.charAt(t) >= 'A' && s.charAt(t) <= 'Z') || (s.charAt(t) >= 'a' && s.charAt(t) <= 'z') || (s.charAt(t) >= '0' && s.charAt(t) <= '9'))) {
                t--;
            }

            char hChar = s.charAt(h);
            char tChar = s.charAt(t);
            if (hChar >= 'A' && hChar <= 'Z') hChar = (char) (hChar + 32);
            if (tChar >= 'A' && tChar <= 'Z') tChar = (char) (tChar + 32);

            if (hChar != tChar) return false;
            h++;
            t--;
        }
        return true;
    }

    /**
     * 167. Two Sum II - Input array is sorted
     * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
     * The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
     * <p>
     * Note:
     * Your returned answers (both index1 and index2) are not zero-based.
     * You may assume that each input would have exactly one solution and you may not use the same element twice.
     */
    public int[] twoSum(int[] numbers, int target) {
        int h = 0, t = numbers.length - 1;

        while (h < t) {
            if (numbers[h] + numbers[t] > target) t--;
            if (numbers[h] + numbers[t] < target) h++;

            if (numbers[h] + numbers[t] == target) return new int[]{h + 1, t + 1};
        }

        return new int[]{-1, -1};
    }

    /**
     * 168. Excel Sheet Column Title
     * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
     * <p>
     * 1 -> A
     * 2 -> B
     * 3 -> C
     * ...
     * 26 -> Z
     * 27 -> AA
     * 28 -> AB
     * ...
     * 52 -> AZ
     * <p>
     * 2591/16=161
     * 2591%16=15
     * 2591=161*16+15
     * <p>
     * 161/16=10
     * 161%16=1
     * 161=16*10+1
     * 2591=(16*10+1)*16+15
     * <p>
     * 2591=10*16^2 + 1*16^1 + 15*16^0
     * <p>
     * 701=26*26^1 + 25*26^0
     * <p>
     * 51=1*26^1 + 25*26^0
     * <p>
     * 52=2*26^1 + 0*26^0
     * <p>
     * 53=2*26^1 + 1*26^0
     * <p>
     * //case1
     * 0->A
     * 1->B
     * 2->C
     * <p>
     * //case2
     * 4->A
     * 5->B
     * 6->C
     */
    public String convertToTitle(int n) {
        StringBuilder sb = new StringBuilder(10);
        while (n > 0) {
            n = n - 1;//make 0->A
            sb.insert(0, (char) ('A' + n % 26));
            n /= 26;
        }
        return sb.toString();
    }

    /**
     * 171. Excel Sheet Column Number
     * Given a column title as appear in an Excel sheet, return its corresponding column number.
     * <p>
     * For example:
     * <p>
     * A -> 1
     * B -> 2
     * C -> 3
     * ...
     * Z -> 26
     * AA -> 27
     * AB -> 28
     * ...
     * <p>
     * A -> [65] -> 1*26^0
     * AA -> [65, 65] -> 1*26^1 + 1*26^0
     * AB -> [65, 66] -> 1*26^1 + 2*26^0
     */
    public int titleToNumber(String s) {
        int len = s.length();
        int ret = 0;
        for (int i = 0; i < len; i++) {
            ret += (s.charAt(i) - 'A' + 1) * Math.pow(26, len - 1 - i);

        }
        return ret;
    }

    /**
     * 172. Factorial Trailing Zeroes
     * Given an integer n, return the number of trailing zeroes in n!.
     */
    public int trailingZeroes(int n) {
        /*
        5 -> 5 4 3 2 1 -> 5 (4 3 2 1) -> 120 -> 5/5=1
        */

        int ret = 0;
        while (n >= 5) {
            ret += n / 5;
            n /= 5;
        }

        return ret;
    }

    /**
     * 189. Rotate Array
     * Given an array, rotate the array to the right by k steps, where k is non-negative.
     * <p>
     * Follow up:
     * Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
     * Could you do it in-place with O(1) extra space?
     */
    public void rotate(int[] nums, int k) {
        /*
        1234567, k=2

        12345(rotate) 67->54321 67
        5432167(rotate) -> 7612345
        76(rotate) 12345 -> 6712345
        */

        k %= nums.length;
        reverse(nums, 0, nums.length - 1 - k);
        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, k - 1);
    }

    public void reverse(int[] nums, int h, int t) {
        while (h < t) {
            int temp = nums[t];
            nums[t] = nums[h];
            nums[h] = temp;
            h++;
            t--;
        }
    }

    /**
     * 190. Reverse Bits
     * Reverse bits of a given 32 bits unsigned integer.
     */
    public int reverseBits(int n) {
        /*
        0000 0010 1001 0100 0001 1110 1001 1100(first bit)

        n&1 -> get first bit 0
        ret -> 0000 0000 0000 0000 0000 0000 0000 0000
        first bit 0<<31 -> 0(move to here)000 0000 0000 0000 0000 0000 0000 0000
        ret + 0(move to here)000 0000 0000 0000 0000 0000 0000 0000
            -> 0(add to here)000 0000 0000 0000 0000 0000 0000 0000

        */
        int ret = 0;
        for (int i = 31; i >= 0; i--) {
            ret += (n & 1) << i;
            n >>>= 1;
        }
        return ret;
    }

    /**
     * 191. Number of 1 Bits
     * Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).
     */
    public int hammingWeight(int n) {
        int count = 0;

        for(int i=0;i<32;i++){
            if((n&1)==1) count++;
            n >>>= 1;
        }

        return count;
    }
}
