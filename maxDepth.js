/*
rightDepth(node)
  if node == null, return 0
  leftDepth = recursion(node.left)
  rightDepth = recursion(node.right)
  maxDepth = max(leftDepth, rightDepth)+1
  return maxDepth
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
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
var maxDepth = function (root) {
  if (root == null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
/*
maxDepth(1) => 4

maxDepth(2) => 3

maxDepth(3)
maxDepth(null)
maxDepth(null) => 1
maxDepth(4) => 2
maxDepth(5)
maxDepth(null)
maxDepth(null) => 1
maxDepth(6)
maxDepth(null)
maxDepth(null) => 1

maxDepth(7)
maxDepth(null)
maxDepth(null) => 1

*/

let root = new TreeNode(1);
let node11 = new TreeNode(2);
let node12 = new TreeNode(7);
let node21 = new TreeNode(3);
let node22 = new TreeNode(4);
let node31 = new TreeNode(5);
let node32 = new TreeNode(6);
root.left = node11;
root.right = node12;
node11.left = node21;
node11.right = node22;
node22.left = node31;
node22.right = node32;

// let ans = maxDepth(root);
// console.log(ans);

/*
root not null,if root == null, return 0
defined stack, depth
push root to stack
while stack not empty{
  stack.size
  depth++
  for, length is size
    stack pop node
    if pop node.left != null
      node.left push to stack
    if pop node.right != null
      node.right push to stack
}
return depth
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
      if (node.left != null) {
        stack.push(node.left);
      }
      if (node.right != null) {
        stack.push(node.right);
      }
    }
  }
  return depth;
}

let ans = maxDepth2(root);
console.log(ans);
