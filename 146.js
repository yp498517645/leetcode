/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  // 为什么用Map而不是Obj 是因为Map有序
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const val = this.cache.get(key);
  const hasKey = this.cache.has(key);
  if (hasKey) {
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const val = this.cache[key];
  const hasKey = this.cache.has(key);
  if (hasKey) {
    this.cache.delete(key);
  }
  this.cache.set(key, value);
  if (this.cache.size > this.capacity) {
    this.cache.delete(this.cache.keys().next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
