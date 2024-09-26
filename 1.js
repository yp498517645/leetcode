/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumSlow = function (nums, target) {
  nums = nums.map((item, index) => [item, index]);
  nums.sort((a, b) => a[0] - b[0]);
  let l = 0;
  let r = nums.length - 1;
  while (l !== r) {
    const sum = nums[l][0] + nums[r][0];
    if (sum === target) {
      return [nums[l][1], nums[r][1]];
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashMap = new Map();
  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index];
    if (hashMap.has(diff)) {
      return [hashMap.get(diff), index];
    } else {
      hashMap.set(nums[index], index);
    }
  }
};
