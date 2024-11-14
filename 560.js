// 前缀和 (主要处理连续子数组的问题) + 哈希表
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let res = 0;
  let count = 0;
  const hashMap = {};
  if (nums.length === 1 && nums[0] !== k) {
    return 0;
  }
  for (let index = 0; index < nums.length; index++) {
    count += nums[index];
    if (hashMap[count - k]) {
      res += hashMap[count - k];
    }
    if(count===k){
      res++
    }
    hashMap[count] = (hashMap[count] || 0) + 1;
    
  }
  return res;
};

console.log(subarraySum([1, 1, 1], 2));
