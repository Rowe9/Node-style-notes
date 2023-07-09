const { appendFile } = require("fs");
const http = require("http");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // 需要设置响应header，设置数据的类型，，数据的编码格式，浏览器才能正确显示

  // 1.方式一：单独设置某一个header,数据的类型是json类型
  res.setHeader("Content-Type", "application/json;charset=utf-8;");
  // 数据的类型是文本类型
  res.setHeader("Content-Type", "text/plain;charset=utf-8");

  // 2.方式二：和响应状态码一起设置
  res.writeHead(200, {
    "Content-Type": "application/json;charset=utf-8;",
  });

  const list = [
    {
      name: "why",
      age: 19,
    },
    {
      name: "hhh",
      age: 33,
    },
  ];
  res.end(JSON.stringify(list));
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功");
});
