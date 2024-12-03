/**
 * 原地排序, 桶排序
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    while (
      nums[index] >= 1 &&
      nums[index] <= nums.length &&
      nums[index] !== index + 1 &&
      nums[index] !== nums[nums[index] - 1]
    ) {
      const temp = nums[nums[index] - 1];
      nums[nums[index] - 1] = nums[index];
      nums[index] = temp;
    }
  }
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== index + 1) {
      return index + 1; // 这里返回缺失的第一个正数
    }
  }
   return nums.length +1;
};

const nums = [1];
console.log('firstMissingPositive', firstMissingPositive(nums));
