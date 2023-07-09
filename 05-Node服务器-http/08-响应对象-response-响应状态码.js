const http = require("http");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  //   响应状态码
  //   在响应结束end之前使用响应状态码
  res.statusCode = 201;
  res.end("hello");
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功");
});
