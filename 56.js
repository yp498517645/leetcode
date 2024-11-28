/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]]; 
  let r = 0;
  for (let index = 1; index < intervals.length; index++) {
    const current = intervals[index];
    if (current[0] <= result[r][1]) {
      result[r] = [result[r][0], Math.max(result[r][1], current[1])];
    } else {
      r++;
      result[r] = current;
    }
  }
  return result;
};


