/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  const queue = [];
  if (!root) {
    return result;
  }

  queue.unshift(root);
  while (queue.length > 0) {
    let size = queue.length;
    const layerResult = [];
    while (size--) {
      const node = queue.pop();
      layerResult.push(node.val);
      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }
    result.push(layerResult);
  }
  return result;
};
