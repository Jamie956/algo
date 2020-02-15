/*
617. Merge Two Binary Trees
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

合并两个树，即节点相加
树递归
递归参数 node.left，node.right
终止条件 node==null，两种情况，1）两个节点都是null，返回空，2）其中一个节点为null，返回另一个节点
最终返回一棵新树
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var mergeTrees = function (t1, t2) {
    if (t1 == null) return t2;
    if (t2 == null) return t1;
    let node = new TreeNode(t1.val + t2.val);
    node.left = mergeTrees(t1.left, t2.left);
    node.right = mergeTrees(t1.right, t2.right);
    return node;
};

let t1 = new TreeNode(1);
t1.left = new TreeNode(3);
t1.right = new TreeNode(2);
t1.left.left = new TreeNode(5);

let t2 = new TreeNode(2);
t2.left = new TreeNode(1);
t2.right = new TreeNode(3);
t2.left.right = new TreeNode(4);
t2.right.right = new TreeNode(7);

console.log(mergeTrees(t1, t2));