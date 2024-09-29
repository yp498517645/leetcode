/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      j=i+1
      while (nums[j] === 0 && j < nums.length) {
        j++;
      }
      if (j >= nums.length) {
        break;
      }
      nums[i] = nums[j];
      nums[j] = 0;
    }
  }
};

const params = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
const res = moveZeroes(params);
