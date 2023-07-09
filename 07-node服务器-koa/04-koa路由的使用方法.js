const Koa = require("koa");
const koaRouter = require("@koa/router");

const app = new Koa();

// 创建路由对象
// 写一个路由前缀
const userRouter = new koaRouter({ prefix: "/users" });

userRouter.get("/", (ctx, next) => {
  ctx.body = "用户数据get";
});
userRouter.get("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = "用户数据：" + id;
});
userRouter.post("/", (ctx, next) => {
  ctx.body = "用户数据post";
});
userRouter.patch("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = "修改用户数据:" + id;
});
userRouter.delete("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = "删除用户数据：" + id;
});

// 让路由中的中间件生效
app.use(userRouter.routes());
// 每次创建完路由都加上这一个，这样用户使用不存在的请求方式的时候不是返回not found而是methods not allowed
app.use(userRouter.allowedMethods());

app.listen(6000, () => {
  console.log("服务器启动成功");
});
