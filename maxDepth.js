/*
104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

由root开始到枝末，求最大深度
树结构用递归
终止条件 node==null
返回深度
实质上求左右节点中深度较大的一个，max(left, right)
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root == null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(5);
root.left.right.right = new TreeNode(6);

console.log(maxDepth(root));

/*
用栈解深度
初始root入栈
深度+1
判断当前层节点是否有下一个节点
同一层的节点全部入栈
*/
function maxDepth2(root) {
  if (root == null) return 0;
  let stack = [];
  let depth = 0;
  stack.push(root);

  while (stack.length > 0) {
    let size = stack.length;
    depth++;
    for (let i = 0; i < size; i++) {
      let node = stack.shift();
      if (node.left != null) stack.push(node.left);
      if (node.right != null) stack.push(node.right);
    }
  }
  return depth;
}

console.log(maxDepth2(root));
