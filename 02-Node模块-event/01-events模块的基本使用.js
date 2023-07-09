// 基本使用：包括基本使用，取消事件，传递参数

// events模块中的事件总线
const EventEmitter = require("events");

// 创建EventEmitter的实例
const emitter = new EventEmitter();

function handleWhyFn(name, age, height) {
  console.log("监听why的事件", name, age, height);
}

// 监听操作
emitter.on("why", handleWhyFn);

setTimeout(() => {
  emitter.emit("why", "coder", 19, 199);

  // 取消emit事件
  emitter.off("why", handleWhyFn);

  // 这一步是不会发送出去的
  setTimeout(() => {
    emitter.emit("why2");
  }, 1000);
}, 2000);
