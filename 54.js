/**
 * 循环要点 循环不变量 (每个循环逻辑一致)，边界控制
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  if (matrix.length === 0) {
    return result;
  }
  let leftLine = 0; //左边界
  let rightLine = matrix[0].length; //右边界
  let topLine = 0; //上边界
  let bottomLine = matrix.length; //下边界
  if (matrix[0].length === 1) {
    return matrix.flat();
  }
  while (true) {
    for (let index = leftLine; index < rightLine; index++) {
      result.push(matrix[leftLine][index]);
    }
    topLine++;
    if (topLine >= bottomLine) {
      break;
    }
    for (let index = topLine; index < bottomLine; index++) {
      result.push(matrix[index][rightLine - 1]);
    }
    rightLine--;
    if (leftLine >= rightLine) {
      break;
    }
    for (let index = rightLine - 1; index >= leftLine; index--) {
      result.push(matrix[bottomLine - 1][index]);
    }
    bottomLine--;
    if (topLine >= bottomLine) {
      break;
    }
    for (let index = bottomLine - 1; index >= topLine; index--) {
      result.push(matrix[index][leftLine]);
    }
    leftLine++;
    if (leftLine >= rightLine) {
      break;
    }
  }
  return result;
};

const matrix = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
  [11, 12, 13],
  [14, 15, 16],
];

console.log('结果', spiralOrder(matrix));
