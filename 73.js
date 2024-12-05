/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  let x_zero = false;
  let y_zero = false;
  for (let index = 0; index < colLen; index++) {
    if (matrix[0][index] === 0) {
      x_zero = true;
      break;
    }
  }
  for (let index = 0; index < rowLen; index++) {
    if (matrix[index][0] === 0) {
      y_zero = true;
      break;
    }
  }
  // 第一行列当作标识位
  for (let x = 1; x < rowLen; x++) {
    for (let y = 1; y < colLen; y++) {
      if (matrix[x][y] === 0) {
        matrix[x][0] = 0;
        matrix[0][y] = 0;
      }
    }
  }

  for (let y = 1; y < colLen; y++) {
    if (matrix[0][y] === 0) {
      for (let x = 1; x < rowLen; x++) {
        matrix[x][y] = 0;
      }
    }
  }
  for (let x = 1; x < rowLen; x++) {
    if (matrix[x][0] === 0) {
      matrix[x].fill(0);
    }
  }
  if (x_zero) {
    matrix[0].fill(0);
  }
  if (y_zero) {
    for (let index = 0; index < matrix.length; index++) {
      matrix[index][0] = 0;
    }
  }
  return matrix;
};

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

console.log('setZeroes', setZeroes(matrix));
