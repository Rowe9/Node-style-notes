const express = require("express");

const app = express();

// 注册路径、方法匹配的中间件
app.get("/home", (req, res, next) => {
  console.log("路径中间件");
  res.end("home data");
});

// 如何一次性注册多个中间件
// 可以在一个路径下处理很多问题，必须要使用next才能传到下一个中间件去
app.get(
  "/home",
  (req, res, next) => {
    console.log("路径中间件1");
    next();
  },
  (req, res, next) => {
    console.log("路径中间件2");
    next();
  },
  (req, res, next) => {
    console.log("路径中间件3");
    next();
  },
  (req, res, next) => {
    console.log("路径中间件4");
  }
);

app.listen(9000, () => {
  console.log("服务器启动成功");
});
