/*
21. Merge Two Sorted Lists
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

合并两个有序单链，返回一个新的有序单链
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

/*
1->5->7
2->4->8

递归解题
参数为链表，递归参数node.next
终止条件 node==null
比较两个节点的值，小的那个节点node.next
(1->5->7,2->4->8) => 1->2->4->5->7->8
(5->7,2->4->8) => 2->4->5->7->8
(5->7,4->8) => 4->5->7->8
(5->7,8) => 5->7->8
(7,8) => 7->8
(null,8) => 8
*/

//1->5->7
let l1 = new ListNode(1);
l1.next = new ListNode(5);
l1.next.next = new ListNode(7);

//2->4->8
let l2 = new ListNode(2);
l2.next = new ListNode(4);
l2.next.next = new ListNode(8);

console.log(mergeTwoLists(l1, l2));