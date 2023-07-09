const http = require("http");

// 1.创建server服务器
const server = http.createServer((req, res) => {
  // 获取参数：body参数
  req.setEncoding("utf-8");

  let isLogin = false;
  req.on("data", (data) => {
    const dataString = data;
    const loginInfo = JSON.parse(dataString);
    if (loginInfo.name === "coderwhy" && loginInfo.password === "123456") {
      isLogin = true;
    } else {
      isLogin = false;
    }
  });

  // request对象本质是一个readable可读流
  req.on("end", () => {
    if (isLogin) {
      res.end("登陆成功");
    } else {
      res.end("账号或密码错误");
    }
  });
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功");
});

// 这样就能拿到body里面的参数了

// 服务器开启成功
// {
//   "name":"coderwhy",
//   "password":"123456"
// }
// 结束
