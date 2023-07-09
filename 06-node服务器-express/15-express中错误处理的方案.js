const express = require("express");

// 创建中间件
const app = express();

app.use(express.json());

// 对错误信息的处理使用的是方案二：自定义错误码
app.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    next(-1001);
  } else if (username !== "coderwhy" || password !== "123456") {
    next(-1002);
  } else {
    res.json({
      code: 0,
      message: "登陆成功，欢迎回来",
      token: "fsji7382hqwhe2wdw",
    });
  }
});

app.use((err, req, res, next) => {
  const code = err;
  let message = "未知的错误信息";

  switch (code) {
    case -1001:
      message = "没有输入用户名和密码";
      break;
    case -1002:
      message = "输入的用户名或密码错误";
      break;
  }

  res.json({ code, message });
});

// 启动服务器
app.listen("9000", () => {
  console.log("服务器启动成功~");
});
