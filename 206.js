/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const track = (pre = null, cur) => {
    if (cur) {
      const next = cur.next;
      cur.next = pre;
      return track(cur, next);
    } else {
      return pre;
    }
  };
  return track(null, head);
};
const head = [1, 2, 3, 4, 5];
reverseList(head);
