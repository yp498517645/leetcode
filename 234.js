/**
 * 回文链表
 * 1. 找到中点-快慢指针 2. 翻转后半部分 3. 比较前半部分和后半部分
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const findMid = (head) => {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    if (!fast.next || !fast.next.next) {
      return slow;
    }
  };
  const reverse = (mid) => {
    let pre = null;
    let cur = mid;
    while (cur) {
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    return pre;
  };
  const mid = findMid(head);
  let last = reverse(mid);
  let head2 = head;
  while (head2 && last) {
    if (head2.val !== last.val) {
      return false;
    }
    head2 = head2.next;
    last = last.next;
  }
  return true;
};
