

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
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
  let ha = headA;
  let hb = headB;
  while (ha != hb) {
    ha = (ha == null) ? headB : ha.next;
    hb = (hb == null) ? headA : hb.next;
  }
  return ha;
};
//1
// let share = new ListNode(2);
// share.next = new ListNode(4);

// let headA = new ListNode(0);
// headA.next = new ListNode(9);
// headA.next.next = new ListNode(1);
// headA.next.next.next = share;

// let headB = new ListNode(3);
// headB.next = share;

//2
let headA = new ListNode(2);
headA.next = new ListNode(6);
headA.next.next = new ListNode(4);

let headB = new ListNode(1);
headB.next = new ListNode(5);

let ans = getIntersectionNode(headA, headB);
console.log(ans);

