/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const hashMap = new Map();
  let size = nums.length;
  if (size === 0 || size === 1) {
    return size;
  }
  let maxCount = 1;
  for (let index = 0; index < size; index++) {
    if (hashMap.has(nums[index])) continue;
    hashMap.set(nums[index], 0);
  }
  console.log('hashMap', hashMap);
  for (let index = 0; index < size; index++) {
    let count = 1;
    let next = nums[index] + 1;
    let pre = nums[index] - 1;
    if (hashMap.get(next) !== 1) {
      while (hashMap.has(next)) {
        hashMap.set(next, 1);
        count++;
        next++;
      }
    }
    if (hashMap.get(pre) !== 1) {
      while (hashMap.has(pre)) {
        hashMap.set(pre, 1);
        count++;
        pre--;
      }
    }

    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
};
const res = longestConsecutive([100, 4, 200, 1, 3, 2]);
console.log('res', res);
