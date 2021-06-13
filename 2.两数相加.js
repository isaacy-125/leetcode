/*
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例 1：
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

示例 2：
输入：l1 = [0], l2 = [0]
输出：[0]

示例 3：
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 注意最后可能跳出循环时 plusIf为true 这时应该追加一个val=1的listNode
var addTwoNumbers = function(l1, l2) {
  const res = new ListNode(0);
  let plusIf = false;

  let newRes = res;

  while (l1 || l2) {
    const val1 = l1 && l1.val ? l1.val : 0;
    const val2 = l2 && l2.val ? l2.val : 0;

    let total = val1 + val2;
    if (plusIf) {
      total = total += 1;
      plusIf = false;
    }
    if (total >= 10) {
      total = total - 10;
      plusIf = true;
    }
    console.log(l1, l2, val1, val2, total);
    newRes.next = new ListNode(total);
    l1 = l1 && l1.next ? l1.next : undefined;
    l2 = l2 && l2.next ? l2.next : undefined;
    newRes = newRes.next;
  }
  if (plusIf) {
    newRes.next = new ListNode(1)
  }
  return res.next;
};
