/**
 * 前缀积
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = [];
  const prefixArr = [];
  const suffixArr = [];
  for (let index = 0; index < nums.length; index++) {
    if (index === 0) {
      prefixArr[index] = 1;
    } else {
      prefixArr[index] = prefixArr[index - 1] * nums[index - 1];
    }
  }
  for (let index = nums.length - 1; index >= 0; index--) {
    if (index === nums.length - 1) {
      suffixArr[nums.length - 1] = 1;
    } else {
      suffixArr[index] = suffixArr[index + 1] * nums[index + 1];
    }
  }
  for (let index = 0; index < nums.length; index++) {
    answer[index] = prefixArr[index] * suffixArr[index];
  }
  return answer;
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
