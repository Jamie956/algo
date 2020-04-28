package com.algo;

import java.util.ArrayList;
import java.util.List;

public class LevelOrderBottom {

    public static void main(String[] args) {
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

        List<List<Integer>> ret = levelOrderBottom(n1);
        System.out.println(ret);
    }

    public static List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> list = new ArrayList<>();
        List<List<Integer>> ret = new ArrayList<>();
        recursion(root, 0, list);

        for (int i = list.size() - 1; i >= 0; i--) {
            ret.add(list.size() - 1 - i, list.get(i));
        }
        return ret;
    }

    public static void recursion(TreeNode root, int level, List<List<Integer>> list) {
        if (root == null) return;
        if (level >= list.size()) list.add(new ArrayList());

        if (root != null) list.get(level).add(root.val);
        if (root.left != null) recursion(root.left, level + 1, list);
        if (root.right != null) recursion(root.right, level + 1, list);
    }

}
