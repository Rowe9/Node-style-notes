const express = require("express");

const app = express();

app.post("./login", (req, res, next) => {
  console.log("第一个中间件的执行");
  req.age = 19;

  // 如果当前中间件没有结束请求，就必须调用next()传递给下一个中间件功能
  next();
});

// 使用use注册的是最普通的中间件
app.use((req, res, next) => {
  console.log("第二个中间件的执行");
});

app.listen("9000", () => {
  console.log("express服务器启动成功");
});

// 当 express 接收到客户端的一个请求时，就会在所有中间件当中进行匹配，
// 当匹配到第一个符合要求的中间件时，那么就会执行这个中间件
// 后续的中间件是否会执行呢？取决于上一个中间件有没有 next()
