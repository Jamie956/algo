/*
226. Invert Binary Tree
Invert a binary tree.

交换两个对称位置的节点的值
树结构考虑递归
终止条件 node==null
递归参数 node.left, node.right
返回反转树
实质上是交换每个节点的左右节点
*/

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
var invertTree = function (root) {
  if (root == null) return null;
  let l = invertTree(root.left);
  let r = invertTree(root.right);
  root.left = r;
  root.right = l;
  return root;
}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(7);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

console.log(invertTree(root));
