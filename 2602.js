/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var minOperations = function (nums, queries) {
 nums.sort((a, b) => a - b); 
  const result = [];
  let currentSum = 0;
  const prefixCount = []; //前缀和
  for (const num of nums) {
    currentSum += num;
    prefixCount.push(currentSum);
  }
  for (let index = 0; index < queries.length; index++) {
    const pos = binarySearch(nums, queries[index]);
    let res = 0;
    if (pos > 0) {
      res += queries[index] * pos - prefixCount[pos - 1];
    }
    if (pos < nums.length) {
      res +=
        prefixCount[nums.length - 1] -
        (pos > 0 ? prefixCount[pos - 1] : 0) -
        queries[index] * (nums.length - pos);
    }
    result.push(res);
  }
  return result;
};

/**
 * 二分查找
 *
 * @param {number[]} arr
 * @param {number} target
 */
const binarySearch = (arr, target) => {
  let l = 0;
  let r = arr.length;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] < target) {
       l = mid + 1;
    } else {
      r=mid
    }
  }
  return l
};


const nums = [
  47, 50, 97, 58, 87, 72, 41, 63, 41, 51, 17, 21, 7, 100, 69, 66, 79, 92, 84, 9, 57, 26, 26, 28, 83,
  38,
];
const queries = [
  50, 84, 76, 41, 64, 82, 20, 22, 64, 7, 38, 92, 39, 28, 22, 3, 41, 46, 47, 50, 88, 51, 9, 49, 38,
  67, 26, 65, 89, 27, 71, 25, 77, 72, 65, 41, 84, 68, 51, 26, 84, 24, 79, 41, 96, 83, 92, 9, 93, 84,
  35, 70, 74, 79, 37, 38, 26, 26, 41, 26,
];
console.log('res', minOperations(nums, queries));
