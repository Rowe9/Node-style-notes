const Koa = require("koa");
const koaRouter = require("@koa/router");

const app = new Koa();

// 创建路由对象
const userRouter = new koaRouter({ prefix: "/users" });

userRouter.get("/", (ctx, next) => {
  let isAuth = false;
  if (isAuth) {
    ctx.body = "登陆成功，欢迎回来~";
  } else {
    // ctx.body = {
    //   code: -1001,
    //   message: "登录失败，未授权",
    // };

    // EventEmitter
    ctx.app.emit("error", -1001, ctx);
  }
});

// 让路由中的中间件生效
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

// 独立的文件：error-handle.js
app.on("error", (code, ctx) => {
  const errCode = code;
  let message = "";
  switch (errCode) {
    case -1001:
      message = "账号错误";
      break;
    case -1002:
      break;
    case -1003:
      break;
  }

  const body = {
    errCode,
    message,
  };
  ctx.body = body;
});

app.listen(6000, () => {
  console.log("koa服务器启动成功~");
});
