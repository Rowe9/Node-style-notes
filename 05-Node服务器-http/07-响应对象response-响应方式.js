const http = require("http");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  //   response对象
  // 响应数据方式一：write，直接写出数据，没有关闭流
  res.write("hhh");
  res.write("hhhqwqwqw");

  // 相应数据方式二：end，会写出最后的数据然后关闭流
  res.end("本次写出已结束");
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功");
});
