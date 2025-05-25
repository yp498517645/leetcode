/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  //找到了要反转的前一个节点
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }

  let curr = prev.next;
  //反转链表
  for (let i = left; i < right; i++) {
    const next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }
  return dummy.next;
};
