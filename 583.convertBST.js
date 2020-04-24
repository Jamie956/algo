/*
538. Convert BST to Greater Tree
Given a Binary Search Tree (BST), convert it to a Greater Tree 
such that every key of the original BST is changed to 
the original key plus sum of all keys greater than the original key in BST.

思想：递归树，先找右下角的节点，再计算父节点，最后算左节点
终止条件：node==null，末尾节点
最终结果：root
递归参数：左节点node.left，右节点node.right
*/

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let sum = 0;
var convertBST = function (root) {
  if (root == null) return null;
  convertBST(root.right);
  sum += root.val;
  root.val = sum;
  convertBST(root.left);
  return root;
};

let root = new TreeNode(5);
root.left = new TreeNode(2);
root.right = new TreeNode(13);
let ans = convertBST(root);
console.log(ans);
/*
(5) => (13)
(13)
  => (null) => null
  => sum=13, root=13
  => (null) => null
(5)
  => sum=5+13=18, root=18
  => (2)
(2)
  => (null) => null
  => sum=2+18=20, root=20
  => (null) => null
*/

// [2,0,3,-4,1]
// let root = new TreeNode(2);
// root.left = new TreeNode(0);
// root.left.left = new TreeNode(-4);
// root.left.right = new TreeNode(1);
// root.right = new TreeNode(3);
// let ans = convertBST(root);
// console.log(ans);
