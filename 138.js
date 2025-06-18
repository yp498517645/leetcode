//随机俩表的复制
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */

var copyRandomList = function (head) {
  if (!head) return null;
  // 创建Hash表,存新链表节点
  const hashMap = new Map();
  let rawNode = head;
  while (rawNode) {
    //创建新Node，不在链表中
    const newNode = new _Node(rawNode.val, null, null);
    hashMap.set(rawNode, newNode);
    rawNode = rawNode.next;
  }

  rawNode = head;
  // 遍历原始链表凭借新链表
  while (rawNode) {
    const newNode = hashMap.get(rawNode);
    newNode.next = rawNode.next ? hashMap.get(rawNode.next) : null;
    newNode.random = rawNode.random ? hashMap.get(rawNode.random) : null;
    rawNode = rawNode.next;
  }
  return hashMap.get(head);
};
