// [ > … ] 表示调用函数后的打印内容

// arrange('William').execute();
// > William is notified

// arrange('William').do('commit').execute();
// > William is notified
// > Start to commit

// arrange('William').wait(5).do('commit').execute();
// > William is notified
// 等待 5 秒
// > Start to commit

// arrange('William').waitFirst(5).do('push').execute();
// 等待 5 秒
// > William is notified
// > Start to push

//或使用类组件, 如果使用类组件，调用形式可以改为： new arrange('William').execute();
class arrange {
  constructor(name) {
    this.tasks = [];
    this.name = name;
    this.notice();
  }
  notice() {
    const task = () => {
      console.log(`${this.name} is notified`);
      return Promise.resolve();
    };
    this.tasks.push(task);
    return this;
  }
  waitFirst(time) {
    const task = () =>
      new Promise((resolve) => {
        console.log(`等待 ${time} 秒`);
        setTimeout(resolve, time * 1000);
      });
    this.tasks.unshift(task);
    return this;
  }
  wait(time) {
    const task = () =>
      new Promise((resolve) => {
        console.log(`等待 ${time} 秒`);
        setTimeout(resolve, time * 1000);
      });
    this.tasks.push(task);
    return this;
  }
  do(operation) {
    const task = () => {
      console.log(`Start to ${operation}`);
      return Promise.resolve();
    };
    this.tasks.push(task);
    return this;
  }
  async execute() {
    for (const task of this.tasks) {
      await task();
    }
    return this;
  }
}
//new arrange('William').execute();
// new arrange('William').do('commit').execute();
//new arrange('William').wait(5).do('commit').execute();
new arrange('William').waitFirst(5).do('push').execute();
