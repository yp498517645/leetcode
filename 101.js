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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  const queue = [[root.left, root.right]];
  while (queue.length > 0) {
    const [_left, _right] = queue.shift();
    if (!_left && !_right) {
      continue;
    }
    if (!_left || !_right) {
      return false;
    }
    if (_left.val !== _right.val) {
      return false;
    }
    queue.push([_left.left, _right.right]);
    queue.push([_left.right, _right.left]);
  }
  return true;
};
