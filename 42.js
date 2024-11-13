/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let l_max = height[0];
  let pre_arr = [];
  let r_max = height[height.length - 1];
  let next_arr = [];
  let max = 0;
  // 前缀最大值
  for (let index = 0; index < height.length; index++) {
    if (l_max < height[index]) {
      l_max = height[index];
    }
    pre_arr.push(l_max);
  }
  console.log(pre_arr);
  
  // 后缀最大值
  for (let index = height.length - 1; index >= 0; index--) {
    if (r_max < height[index]) {
      r_max = height[index];
    }
    next_arr.unshift(r_max);
  }
  console.log(next_arr);

  for (let index = 0; index < height.length; index++) {
    const per = Math.min(next_arr[index], pre_arr[index]) - height[index];
    max += per;
  }
  console.log('max', max);
};
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
