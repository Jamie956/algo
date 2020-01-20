/*
recursion(root){
  if root==null => null
  left = recursion(root.left)
  right = recursion(root.right)
  root.left = right
  root.right = left
  return root
}
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
var invertTree = function (root) {
  if (root == null) {
    return null;
  }
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}

let root = new TreeNode(4);
let l1n1 = new TreeNode(2);
let l1n2 = new TreeNode(7);
let l2n1 = new TreeNode(1);
let l2n2 = new TreeNode(3);
let l2n3 = new TreeNode(6);
let l2n4 = new TreeNode(9);
root.left = l1n1;
root.right = l1n2;
l1n1.left = l2n1;
l1n1.right = l2n2;
l1n2.left = l2n3;
l1n2.right = l2n4;

let ans = invertTree(root);
//4,7,9,null,null,6,null,null,2,3,null,null,1,null,null
console.log(root);
