/*
101. Symmetric Tree
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

判断一棵树是否是对称
树用递归
递归参数 node.left, node.right
要比较对称的节点，递归函数传参(node.left,node.right)，走到树枝末尾就是最左的节点，和最右的节点，另一个方向(node.right,node.left)
终止条件1）两个节点都为null=>true, 2）只有其中一个节点null=>false，3）两个节点的值相等=>true，4）两个节点的值不相等=>false
返回值 boolean
*/

function TreeNode(val){
  this.val = val;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  return recursion(root, root);
}

function recursion(t1, t2) {
  if(t1==null && t2==null) return true;//both null, symmetric
  if(t1==null || t2==null) return false;//one of null, not symmetric
  if(t1.val != t2.val) return false;//both not null, to compare there value
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
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right = new TreeNode(2);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root));
