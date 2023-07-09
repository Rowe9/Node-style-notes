const http = require("http");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  console.log(req.headers);
  console.log(req.headers["content-type"]);
  res.end("headers的信息");

  // 拿到设置的token
  const token = req.headers["authorization"];
  console.log(token); //aaabbb
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功");
});

// 打印结果

// {
//   'content-type': 'application/json',
//   'user-agent': 'PostmanRuntime/7.32.2',
//   accept: '*/*',
//   'postman-token': '304e6d22-fc67-4680-8564-1c44c5a75b36',
//   host: 'localhost:8000',
//   'accept-encoding': 'gzip, deflate, br',
//   connection: 'keep-alive',
//   'content-length': '22'
// }

// application/json
