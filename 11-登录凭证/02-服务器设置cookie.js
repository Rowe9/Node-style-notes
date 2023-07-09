const Koa = require("koa");
const KoaRouter = require("@koa/router");

const app = new Koa();

const userRouter = new KoaRouter({ prefix: "/users" });
userRouter.get("/login", (ctx, next) => {
  // 在服务器中为登录成功的客户端，设置一个cookie
  ctx.cookies.set("slogin", "ikun", {
    maxAge: 60 * 1000,
  });
  ctx.body = "登陆成功";
});

userRouter.get("/list", (ctx, next) => {
  const value = ctx.cookies.get("slogan");
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
