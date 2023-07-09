const express = require("express");

// 创建中间件
const app = express();

// 编写中间件
// 请求参数query的解析
app.get("/home/list", (req, res, next) => {
  // express内置已经对query进行了解析，直接用就好了
  console.log(req.query);
  res.end("home list 数据");
});

// 请求参数params的解析
app.get("/users/:id", (req, res, next) => {
  const id = req.params.id;
  res.end(`获取到${id}的数据`);
});

// 启动服务器
app.listen("9000", () => {
  console.log("服务器启动成功~");
});
