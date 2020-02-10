/*
21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  let cur1 = l1;
  let cur2 = l2;
  let head = l1;
  let previous = l1;

  while (cur2) {
    if (cur2.val <= head.val) {
      let node = new ListNode(cur2.val);
      node.next = head;
      head = node;

      cur1 = head;
      cur2 = cur2.next;
    } else {
      cur1 = head;
      while (cur1) {
        previous = cur1;
        cur1 = cur1.next;
        if ((cur1 == null) && (cur2.val >= previous.val)) {
          let node = new ListNode(cur2.val);
          previous.next = node;

          cur2 = cur2.next;
          break;
        } else if (cur2.val < cur1.val) {
          let node = new ListNode(cur2.val);
          previous.next = node;
          node.next = cur1;

          cur2 = cur2.next;
          break;
        }
      }
    }
  }
  return head;
};

//1->5->7
let n1 = new ListNode(1);
let n2 = new ListNode(5);
let n3 = new ListNode(7);
n1.next = n2;
n2.next = n3;

//2->4->8
let n4 = new ListNode(2);
let n5 = new ListNode(4);
let n6 = new ListNode(8);
n4.next = n5;
n5.next = n6;

var mergeTwoLists2 = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists2(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists2(l1, l2.next);
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
let ans = mergeTwoLists2(l1, l2);
console.log(ans);