/*
160. Intersection of Two Linked Lists
Write a program to find the node at which the intersection of two singly linked lists begins.
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) return null;
  let curA = headA;
  let curB = headB;
  while (curA != curB) {
    curA = curA == null ? headB : curA.next;
    curB = curB == null ? headA : curB.next;
  }
  return curA;
}


//1
let public = new ListNode(2);
public.next = new ListNode(4);

let headA = new ListNode(0);
headA.next = new ListNode(9);
headA.next.next = new ListNode(1);
headA.next.next.next = public;

let headB = new ListNode(3);
headB.next = public;

//2
// let headA = new ListNode(2);
// headA.next = new ListNode(6);
// headA.next.next = new ListNode(4);

// let headB = new ListNode(1);
// headB.next = new ListNode(5);

console.log(getIntersectionNode(headA, headB));

/*
找两条单链共同的节点，不仅是节点的值相等，而且是同一个对象
AB链各一个指针，假设A链较短，会先满足node==null，说明指针已经到这条链的末尾，这时将指针指向B链的head
当B链的指针走到末尾即node==null，使指针指向A链，这样做可以使两个指针到尾部的距离都是相等的，意味着指针会相遇（如果两条链有共同节点）
*/