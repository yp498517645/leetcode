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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  const traverse = (node) => {
    if (!node) {
      return;
    }
    //左
    traverse(node.left);
    //中
    result.push(node.val);
    //右
    traverse(node.right);
  };
  traverse(root);
  return result;
};
