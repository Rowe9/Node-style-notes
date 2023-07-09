const express = require("express");

// 创建中间件
const app = express();

// 编写中间件
app.get("/list", (req, res, next) => {
  // 1.res.end

  // 2.res.json
  res.json({
    name: "coder",
    age: 19,
    list: [
      { name: "iphone", price: 9999 },
      { name: "iphone", price: 9999 },
      { name: "iphone", price: 9999 },
      { name: "iphone", price: 9999 },
    ],
  });

  // 3.res.status(),给客户端返回状态码
  res.status(201);
});

// 启动服务器
app.listen("9000", () => {
  console.log("服务器启动成功~");
});
