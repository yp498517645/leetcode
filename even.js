// 发布订阅
var PubSub = /** @class */ (function () {
    function PubSub() {
        this.taskObj = {};
    }
    PubSub.prototype.subscribe = function (topic, callback) {
        if (!this.taskObj[topic]) {
            this.taskObj[topic] = [];
        }
        this.taskObj[topic].push(callback);
    };
    PubSub.prototype.publish = function (topic) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.taskObj[topic]) {
            this.taskObj[topic].forEach(function (callback) {
                callback.apply(void 0, args);
            });
        }
    };
    PubSub.prototype.unsubscribe = function (topic, callback) {
        if (this.taskObj[topic]) {
            this.taskObj[topic] = this.taskObj[topic].filter(function (cb) { return cb !== callback; });
            if (this.taskObj[topic].length === 0) {
                delete this.taskObj[topic];
            }
        }
    };
    return PubSub;
}());
var pubSub = new PubSub();
var callback1 = function (data) { return console.log("Callback 1 received: ".concat(data)); };
var callback2 = function (data) { return console.log("Callback 2 received: ".concat(data)); };
pubSub.subscribe('testTopic', callback1);
pubSub.subscribe('testTopic', callback2);
pubSub.unsubscribe('testTopic', callback1);
pubSub.publish('testTopic', 'test');
