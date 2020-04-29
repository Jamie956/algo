/*
160. Intersection of Two Linked Lists
Write a program to find the node at which the intersection of two singly linked lists begins.

to find the node that two list meet with each
using double cursor,
cursor move to head of another B list when its cursor goto A list tail,
some point they will meet with, listA'=listB'
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

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

