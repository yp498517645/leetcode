/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let areaMax = 0;
  if (height.length === 2) {
    return Math.min(height[0], height[1]);
  }
  while (l !== r) {
    const h = Math.min(height[l], height[r]);
    const w = r - l;
    const area = h * w;

    if (height[l] < height[r] ) {
      l++;
    } else {
      r--;
    }
    if (area > areaMax) {
      areaMax = area;
    }
  }
  return areaMax;
};

const params = [1, 3, 2, 5, 25, 24, 5];
console.log(maxArea(params));
