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
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  // 1.找到链表中心 （快慢指针）
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let midNode = slow.next;
  slow.next = null;
  // 2. 排序子链表，直到子链表长度都为1
  const leftHead = sortList(head);
  const rightHead = sortList(midNode);
  // 3. 合并链表
  return merge(leftHead, rightHead);
};
//1 4 2 3
const merge = (leftHead, rightHead) => {
  const dummy = new ListNode(0);
  let currentNode = dummy;

  while (leftHead && rightHead) {
    if (leftHead.val <= rightHead.val) {
      currentNode.next = leftHead;
      leftHead = leftHead.next;
    } else {
      currentNode.next = rightHead;
      rightHead = rightHead.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = leftHead ? leftHead : rightHead;
  return dummy.next;
};
