/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const queue = [];
  const res = [];
  for (let index = 0; index < nums.length; index++) {
    while (queue[0] <= index - k) {
      queue.shift();
    }
    if (queue.length === 0 ) {
      queue.push(index);
    }else{
      while (nums[queue[queue.length - 1]] < nums[index]) {
        queue.pop();
      }
      queue.push(index);
    }
     if (index >= k - 1) {
       res.push(nums[queue[0]]);
     }
  }
  return res;
};
//            0  1  2  3  4  5
const nums = [1, 3, 1, 2, 0, 5];
const k = 3;
console.log(maxSlidingWindow(nums, k));
