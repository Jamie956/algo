/*
437. Path Sum III
You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

给出一个二叉树，每个节点都是整数
有多少条这样的路径，他们的和等于 sum
路径可由任何位置开始，但方向必须向下

终止条件 node==null
*/

function TreeNode(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

var pathSum = function(root, sum) {
  if(root==null) return 0;
  return paths(root,sum) + pathSum(root.left,sum) + pathSum(root.right,sum);
};

function paths(root, sum){
  if(root==null) return 0;
  let count = 0;
  if(root.val==sum) count += 1;
  return count + paths(root.left,sum-root.val) + paths(root.right,sum-root.val);
}

let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(-3);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(2);
root.left.left.left = new TreeNode(3);
root.left.left.right = new TreeNode(-2);
root.left.right.right = new TreeNode(1);
root.right.right = new TreeNode(11);

console.log(pathSum(root, 8));
