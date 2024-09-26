/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if(slow===fast){
      return slow;
    }
  } while (slow !== fast);
};
console.log(findDuplicate([3,1,3,4,2]));