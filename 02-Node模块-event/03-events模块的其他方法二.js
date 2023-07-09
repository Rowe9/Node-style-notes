const EventEmitter = require("event");

const ee = new EventEmitter();

// 1.事件只监听一次，只监听第一次发送事件
ee.once("why", () => {
  console.log("once监听why");
});

ee.emit("why");
ee.emit("why");
ee.emit("why");

// 2.将事件监听移到最前面：prependListener
ee.prependListener("why", () => {
  console.log("on监听why2");
});

// 3.移除所有的事件监听
// 不传递参数，移除所有的事件监听
// 传递参数，移除指定的事件监听
ee.removeAllListeners();
