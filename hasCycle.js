/*
141. Linked List Cycle

Given a linked list, determine if it has a cycle in it.
To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
*/
/*
判断一条单链是否是闭合，链的末尾指向链中的某个节点
假设链中有节点A，链尾有节点B，如果B.next==A，它就是闭合链，A==B.next
使用set储存每个节点，当前A节点已存在set，当B.next存入set时，set.has(A)==ture
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head == null) return false;
  let set = new Set();
  while (head != null) {
    if (set.has(head)) return true;
    set.add(head);
    head = head.next;
  }
  return false;
};

let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(4);
head.next.next.next.next = head.next;

console.log(hasCycle(head));