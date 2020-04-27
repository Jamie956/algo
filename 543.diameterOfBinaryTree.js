/*
543. Diameter of Binary Tree
Given a binary tree, you need to compute the length of the diameter of the tree. 
The diameter of a binary tree is the length of the longest path 
between any two nodes in a tree. This path may or may not pass through the root.

core, to find the node that his left node + right node is max, so recursion
*/

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

let diameter;
var diameterOfBinaryTree = function (root) {
  diameter = 0;
  depth(root);
  return diameter;
};

function depth(root) {
  if (root == null) return 0;
  let leftDepth = depth(root.left);
  let rightDepth = depth(root.right);
  diameter = Math.max(leftDepth + rightDepth, diameter);
  return Math.max(leftDepth, rightDepth) + 1;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root));
