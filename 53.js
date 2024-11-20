/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let tempMax = nums[0];
  let globalMax = nums[0];
  for (let index = 1; index < nums.length; index++) {
    tempMax = tempMax + nums[index]
    if (tempMax < nums[index]) {
        tempMax = nums[index]
    }
    if (globalMax < tempMax) {
        globalMax = tempMax;
    }
  }
 return globalMax
};

const nums = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums));
