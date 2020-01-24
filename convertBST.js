/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
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
  if (root != null) {
    convertBST(root.right);
    sum += root.val;
    root.val = sum;
    convertBST(root.left);
  }
  return root;
};

// let root = new TreeNode(5);
// let l1n1 = new TreeNode(2);
// let l1n2 = new TreeNode(13);
let root = new TreeNode(2);
let l1n1 = new TreeNode(1);
let l1n2 = new TreeNode(3);
root.left = l1n1;
root.right = l1n2;

let ans = convertBST(root);
console.log(ans);

