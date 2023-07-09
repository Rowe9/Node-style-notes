const express = require("express");

// 创建中间件
const app = express();
app.use(express.json()); //解析客户端传递过来的json数据
app.use(express.urlencoded({ extended: true })); //解析客户端传递过来的urlencoded数据

// 在urlencoded里面加上{ extended: true }可避免出现警告

// 编写中间件
app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.end("登陆成功，欢迎回来");
});

// 启动服务器
app.listen("9000", () => {
  console.log("服务器启动成功~");
});
