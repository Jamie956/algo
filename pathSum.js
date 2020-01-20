/*
pathSum(root, sum){
  if root==null => 0
  return pathSum(root.left,sum) + pathSum(root.right,sum) + paths(root,sum);
}

paths(root,sum){
  if root==null => o
  defined count=0
  if(root.val == sum) count++
  count += paths(root.left,sum-root.val)
  count += paths(root.right,sum-root.val)
  return count
}
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val){
  this.val = val;
  this.left = null;
  this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
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
let l1n1 = new TreeNode(5);
let l1n2 = new TreeNode(-3);
let l2n1 = new TreeNode(3);
let l2n2 = new TreeNode(2);
let l2n3 = new TreeNode(11);
let l3n1 = new TreeNode(3);
let l3n2 = new TreeNode(-2);
let l3n3 = new TreeNode(1);

root.left = l1n1;
root.right = l1n2;
l1n1.left = l2n1;
l1n1.right = l2n2;
l2n1.left = l3n1;
l2n1.right = l3n2
l2n2.right = l3n3;
l1n2.right = l2n3;

let sum = 8;
let ans = pathSum(root, 8);
console.log(ans);

