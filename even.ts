// 发布订阅

class PubSub {
  private taskObj: {
    [key in string]: any[];
  };
  constructor() {
    this.taskObj = {};
  }

  subscribe(topic: string, callback: Function): void {
    if (!this.taskObj[topic]) {
      this.taskObj[topic] = [];
    }
    this.taskObj[topic].push(callback);
  }
  publish(topic: string, ...args: any[]): void {
    if (this.taskObj[topic]) {
      this.taskObj[topic].forEach((callback) => {
        callback(...args);
      });
    }
  }

  unsubscribe(topic: string, callback: Function): void {
    if (this.taskObj[topic]) {
      this.taskObj[topic] = this.taskObj[topic].filter((cb) => cb !== callback);
      if (this.taskObj[topic].length === 0) {
        delete this.taskObj[topic];
      }
    }
  }
}
const pubSub = new PubSub();
const callback1 = (data: any) => console.log(`Callback 1 received: ${data}`);
const callback2 = (data: any) => console.log(`Callback 2 received: ${data}`);
pubSub.subscribe('testTopic', callback1);
pubSub.subscribe('testTopic', callback2);
pubSub.unsubscribe('testTopic', callback1);
pubSub.publish('testTopic', 'test');
