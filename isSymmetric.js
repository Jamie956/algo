function TreeNode(val){
  this.val = val;
  this.left = null;
  this.right = null;
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
 * @return {boolean}
 */
function isSymmetric(root) {
  return isMirror(root, root);
}

function isMirror(t1, t2) {
  /*
  t1 == null, t2 == null  //both null, symmetric
  t1 == null or t2 == null //one of null, not symmetric
  t1 != null, t2 != null //both not null, to compare there value
  */
  if(t1==null && t2==null) return true;
  if(t1==null || t2==null) return false;
  if(t1.val != t2.val) return false;
  return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
}

/*
     1
    / \
   2   2'
  / \ / \
  3 4 4' 3'
isMirror(1,1')

isMirror(2,2')//isMirror(t1.left, t2.right)

isMirror(3,3')//isMirror(t1.left, t2.right)
isMirror(null,null')
isMirror(null,null')

isMirror(4,4')//isMirror(t1.right, t2.left)
isMirror(null,null')
isMirror(null,null')

isMirror(2',2)//isMirror(t1.right, t2.left)

isMirror(4',4)//isMirror(t1.left, t2.right)
isMirror(null',null)
isMirror(null',null)

isMirror(3',3)//isMirror(t1.right, t2.left)
isMirror(null',null)
isMirror(null',null)
*/

let root = new TreeNode(1);
let node11 = new TreeNode(2);
let node12 = new TreeNode(2);
let node21 = new TreeNode(3);
let node22 = new TreeNode(4);
let node23 = new TreeNode(4);
let node24 = new TreeNode(3);

root.left = node11;
root.right = node12;
node11.left = node21;
node11.right = node22;
node12.left = node23;
node12.right = node24;

let ans = isSymmetric(root);
console.log(ans);