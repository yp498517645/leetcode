/** hash表
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashMap = new Map();
  for (let index = 0; index < strs.length; index++) {
    const temp = strs[index].split('').sort().join('');
    if (!hashMap.has(temp)) {
      hashMap.set(temp, [strs[index]]);
    } else {
      hashMap.get(temp).push(strs[index]);
    }
  }
  return Array.from(hashMap, (m) => [...m[1]]);
};

/** 计数法
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsTwo = function (strs) {
  const hashMap = new Map();

  for (const str of strs) {
    // 创建一个字符频率计数数组（26个小写字母）
    const count = new Array(26).fill(0);
    for (const char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    // 将计数数组转为字符串作为键
    const key = count.join(',');
    if (!hashMap.has(key)) {
      hashMap.set(key, []);
    }
    hashMap.get(key).push(str);
  }
  return Array.from(hashMap.values());
};

const res = groupAnagramsTwo([
  'cab',
  'tin',
  'pew',
  'duh',
  'may',
  'ill',
  'buy',
  'bar',
  'max',
  'doc',
]);
console.log('res', res);
