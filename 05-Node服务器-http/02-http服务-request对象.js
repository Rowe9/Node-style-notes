const http = require("http");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  console.log("服务器被访问~");

  console.log(req.url);
  console.log(req.method);

  res.end("hello world");
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功");
});
