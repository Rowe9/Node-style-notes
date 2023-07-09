const Koa = require("koa");
const KoaRouter = require("@koa/router");
const koaSession = require("koa-session");

const app = new Koa();

const userRouter = new KoaRouter({ prefix: "/users" });

// 注意使用这个函数的方法，后面还要传入一个app
const session = koaSession(
  {
    key: "sessionID",
    // true进一步加密操作
    signed: true,
    maxAge: 60 * 24 * 60,
  },
  app
);
// 当signned=true的时候需要做一个加盐操作
app.keys = ["aaa", "bbb", "ccc"];

// 使用中间件session
app.use(session);

userRouter.get("/login", (ctx, next) => {
  ctx.session.slogan = "ikun";
});

userRouter.get("/list", (ctx, next) => {
  const value = ctx.session.slogan;
  if (value === "ikun") {
    ctx.body = "user list data";
  } else {
    ctx.body = "暂时没有权限访问列表";
  }
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(7000, () => {
  console.log("服务器启动成功");
});
