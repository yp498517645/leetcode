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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0;
  const height = (node) => {
    if (!node) {
      return 0;
    }
    const leftLayer = height(node.left);
    const rightLayer = height(node.right);
    max = Math.max(max, leftLayer + rightLayer);
    return Math.max(leftLayer, rightLayer) + 1;
  };
  height(root);
  return max;
};
