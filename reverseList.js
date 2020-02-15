/*
206. Reverse Linked List
Reverse a singly linked list.

单链反转
1->2->3->4->5->NULL
5->4->3->2->1->NULL

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseList = function (head) {
  let cur = head;
  let ans = null;
  while (cur != null) {
    let tailTmp = cur.next;
    cur.next = ans;
    ans = cur;
    cur = tailTmp;
  }
  return ans;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// console.log(reverseList(head));

var reverseList2 = function (head) {
  if(head==null || head.next==null) return head;
  let ans = reverseList2(head.next);
  head.next.next = head;
  head.next = null;
  return ans;
}

console.log(reverseList2(head));
