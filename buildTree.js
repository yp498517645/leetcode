// 入参格式参考：
const arr = [
  { id: 1, name: 'i1' },
  { id: 2, name: 'i2', parentId: 1 },
  { id: 4, name: 'i4', parentId: 3 },
  { id: 3, name: 'i3', parentId: 2 },
  { id: 8, name: 'i8', parentId: 7 },
];
/**
 * Description
 * @param {Array} arr
 * @returns {any}
 */
function buildTree(arr) {
  const tree = {
    id: 'root',
    children: [],
  };
  if (Array.isArray(arr)) {
    const formatMap = new Map();
    arr.forEach((item) => {
      if (!formatMap.get(item.id)) {
        formatMap.set(item.id, { ...item, children: [] });
      }
    });
    arr.forEach((item) => {
      const findNode = formatMap.get(item?.parentId);
      console.log('findNode', findNode);
      if (findNode) {
        findNode.children.push(formatMap.get(item.id));
      } else {
        tree.children.push(formatMap.get(item.id));
      }
    });
  }
  return tree;
}
const result = buildTree(arr);
console.log('result', result);
