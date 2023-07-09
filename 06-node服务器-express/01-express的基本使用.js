const express = require("express");

// 1.创建express的服务器
const app = express();

// 客户端访问url:/login和/home
app.post("/login", (req, res) => {
  res.end("登陆成功，欢迎回来");
});
app.get("/home", (req, res) => {
  res.end("轮播图数据..................");
});

app.listen(9000, () => {
  console.log("express服务器启动成功");
});
