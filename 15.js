/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // sort默认UTF-16 码元值升序排序。
  nums.sort((a, b) => a - b);
  if (nums[nums.length - 1] < 0) {
    return [];
  }
  if (nums[nums.length - 1] === 0 && nums[0] === 0) {
    return [[0, 0, 0]];
  }
  let pre;
  const result = [];
  for (let index = 0; index < nums.length; index++) {
    const current = nums[index];
    let l = index + 1;
    let r = nums.length - 1;

    // 跳过重复的元素
    if (index > 0 && current === nums[index - 1]) {
      continue;
    }
    while (l < r) {
      const sum = current + nums[l] + nums[r];
      if (sum === 0) {
        result.push([current, nums[l], nums[r]]);
        // 跳过重复的左指针元素
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        // 跳过重复的右指针元素
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return result;
};

const params = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
const result = threeSum(params);
console.log('result', result);
