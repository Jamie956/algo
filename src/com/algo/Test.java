package com.algo;

import com.dataSctruct.ListNode;
import com.dataSctruct.TreeNode;

import java.util.List;

public class Test {
    public static void main(String[] args) {
        testTitleToNumber();
    }

    private static void testMinDepth() {
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

    public static void testDeleteDuplicates() {
        ListNode node1 = new ListNode(1);
        ListNode node2 = new ListNode(1);
        ListNode node3 = new ListNode(2);
        node1.next = node2;
        node2.next = node3;

        ListNode ret = new Solution().deleteDuplicates(node1);
    }

    public static void testIsBalanced() {
        TreeNode n1 = new TreeNode(3);
        TreeNode n2 = new TreeNode(9);
        TreeNode n3 = new TreeNode(20);
        TreeNode n4 = new TreeNode(15);
        TreeNode n5 = new TreeNode(7);
        n1.left = n2;
        n1.right = n3;
        n3.left = n4;
        n3.right = n5;

        boolean ret = new Solution().isBalanced(n1);
        System.out.println(ret);
    }

    public static void testIsSameTree() {
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

        boolean ret = new Solution().isSameTree(a1, b1);
        System.out.println(ret);
    }

    public static void testMySqrt() {
        new Solution().mySqrt(10);
    }

    public static void testLevelOrderBottom() {
        TreeNode n1 = new TreeNode(3);
        TreeNode n2 = new TreeNode(9);
        TreeNode n3 = new TreeNode(20);
        TreeNode n4 = new TreeNode(8);
        TreeNode n5 = new TreeNode(15);
        TreeNode n6 = new TreeNode(7);
        n1.left = n2;
        n1.right = n3;
        n2.left = n4;
        n3.left = n5;
        n3.right = n6;

        List<List<Integer>> ret = new Solution().levelOrderBottom(n1);
        System.out.println(ret);
    }

    public static void testSortedArrayToBST() {
        int[] arr = {-10, -3, 0, 5, 9};
        new Solution().sortedArrayToBST(arr);
    }

    public static void testHasPathSum() {
        TreeNode root = new TreeNode(5);
        TreeNode n1 = new TreeNode(4);
        TreeNode n2 = new TreeNode(8);
        TreeNode n3 = new TreeNode(11);
        TreeNode n4 = new TreeNode(13);
        TreeNode n5 = new TreeNode(4);
        TreeNode n6 = new TreeNode(7);
        TreeNode n7 = new TreeNode(2);
        TreeNode n8 = new TreeNode(1);

        root.left = n1;
        root.right = n2;
        n1.left = n3;
        n3.left = n6;
        n3.right = n7;
        n2.left = n4;
        n2.right = n5;
        n5.right = n8;

        boolean ret = new Solution().hasPathSum(root, 22);
        System.out.println(ret);
    }

    public static void testMaxProfit() {
        int[] prices = {1, 2, 3, 4, 5};
        new Solution().maxProfit(prices);
    }

    public static void testIsPalindrome() {
        boolean ret = new Solution().isPalindrome("A man, a plan, a canal: Panama");
        System.out.println(ret);
    }

    public static void testTwoSum() {
        int[] ret = new Solution().twoSum(new int[]{2, 7, 11, 15}, 9);
        System.out.println(ret);
    }

    public static void testConvertToTitle() {
        String ret = new Solution().convertToTitle(27);
        System.out.println(ret);
    }

    public static void testTitleToNumber() {
        new Solution().titleToNumber("AB");
    }
}
