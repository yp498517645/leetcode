/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashMap = new Map()
  for (let index = 0; index < strs.length; index++) {
   const temp = strs[index].split('').sort().join('')
   if(!hashMap.has(temp)){
    hashMap.set(temp, [strs[index]]);
   }else{
     hashMap.get(temp).push(strs[index]);
   }
  }
 return Array.from(hashMap, (m) => [...m[1]]);
};



  /**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagramsTwo = function (strs) {
  for (let index = 0; index < strs.length; index++) {
   const arr = new Array(26).fill(0, 0, 26);
    
  }
};

const res = groupAnagramsTwo(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
console.log('res', res);