const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("中间件");
//   res.end("----------");
// });

// 注册路径匹配的中间件
app.use("/home", (req, res, next) => {
  console.log("路径中间件");
  res.end("home data");
});

app.listen(9000, () => {
  console.log("服务器启动成功");
});
