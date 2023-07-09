const express = require("express");

const app = express();

app.post("/login", (req, res, next) => {
  // 获取客户端传递过来的用户名和密码
  let isLogin = false;
  req.on("data", (data) => {
    const dataString = data.toString();
    const dataInfo = JSON.parse(dataString);
    if (dataInfo.username === "rowe" && dataInfo.password === "123456") {
      isLogin = true;
    }
  });

  req.on("end", () => {
    if (isLogin) {
      res.end("登陆成功，欢迎回来");
    } else {
      res.end("登陆失败，请检查您的账号和密码是否正确");
    }
  });
});

app.get("/registry", (req, res, next) => {
  res.end("注册成功，开始您的新旅程吧~");
});

app.listen(9000, () => {
  console.log("服务器启动成功");
});
