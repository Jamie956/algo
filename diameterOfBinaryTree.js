/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
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