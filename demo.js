/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.length = k;
  this.queue = [];
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.queue.length < this.length) {
    this.queue.push(value);
    return true;
  }
  return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.queue.length > 0) {
    this.queue.unshift();
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.queue.length > 0) {
    return this.queue[this.queue.length];
  }
  return -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0 ? true : false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.queue.length >= this.length;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

//["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","Rear","isFull","deQueue","enQueue","Rear"]
//[[3],[1],[2],[3],[4],[],[],[],[4],[]]
//[null,true,true,true,false,3,true,true,true,4]
const circularQueue = new MyCircularQueue(3); // 设置长度为 3
circularQueue.enQueue(1); // 返回 true
circularQueue.enQueue(2); // 返回 true
circularQueue.enQueue(3); // 返回 true
circularQueue.enQueue(4); // 返回 false，队列已满
circularQueue.Rear(); // 返回 3
circularQueue.isFull(); // 返回 true
circularQueue.deQueue(); // 返回 true
circularQueue.enQueue(4); // 返回 true
circularQueue.Rear(); // 返回 4
