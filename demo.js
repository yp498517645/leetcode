//归并排序
const param = [29, 10, 14, 37, 14, 25, 10];

/**
 * 合并数组 从小到大
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array}
 */
const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
};
/**
 * 合并数组 从小到大
 * @param {Array} arr
 * @returns {any}
 */
const sort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  console.log('mid', mid);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid, arr.length);
  return merge(sort(leftArr), sort(rightArr));
};

console.log('结果', sort(param));
