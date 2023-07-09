const EventEmitter = require("events");
const { getMaxListeners } = require("process");

const ee = new EventEmitter();

ee.on("why", () => {});
ee.on("why", () => {});
ee.on("why", () => {});

ee.on("kobe", () => {});
ee.on("kobe", () => {});

// 1.获取所有事件监听的名称
console.log(ee.eventNames());
// [ 'why', 'kobe' ]

// 2.获取监听最大的监听个数
console.log(ee.getMaxListeners()); // 10

// 3.获取某一个事件名称监听对应的监听器个数
console.log(ee.listenerCount("why")); // 3

// 4.获取某一个事件名称对应的监听器函数
console.log(ee.listeners("why"));
// [
//   [Function (anonymous)],
//   [Function (anonymous)],
//   [Function (anonymous)]
// ]
