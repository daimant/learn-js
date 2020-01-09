'use strict';

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // function ListNode(val) {
  //     this.val = val;
  //     this.next = null;
  // }

  let arr = [];

  if (!l1 || !l2) {
    return 0;
  }

  arr.push(l1.val);

  while (l1.next) {
    l1 = l1.next;
    arr.push(l1.val);
  }

  arr.push(l2.val);

  while (l2.next) {
    l2 = l2.next;
    arr.push(l2.val);
  }

  arr.sort((a,b) => a < b ? 1 : -1)
  // ListNode(arr)

  // return arr.next;
};