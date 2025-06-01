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
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let nextNode = head.next; // 下一个节点
  let newHead = swapPairs(nextNode.next); // 递归处理后续节点
  head.next = newHead; // 当前节点连接到递归返回的子链表
  nextNode.next = head; // 下一个节点连接到当前节点
  return nextNode; // 返回交换后的头节点
};
