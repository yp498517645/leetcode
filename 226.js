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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 中 左 右
  const reverse = (node) => {
    if (!node) {
      return;
    }
    const _left = node.left;
    const _right = node.right;
    node.right = _left;
    node.left = _right;
    reverse(node.left);
    reverse(node.right);
  };
  reverse(root);
  return root;
};
