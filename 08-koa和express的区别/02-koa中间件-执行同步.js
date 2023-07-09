const Koa = require("koa");
const koaRouter = require("@koa/router");

const app = new Koa();

// 注册中间件
app.use((ctx, next) => {
  console.log("koa 中间件01");
  next();

  ctx.body = "中间件01返回的结果";
});

app.use((ctx, next) => {
  console.log("koa中间件02");
  next();

  ctx.body = "中间件02返回的结果";
});

app.use((ctx, next) => {
  console.log("koa中间件03");

  ctx.body = "中间件03返回的结果";
});

// 创建路由对象
const userRouter = new koaRouter({ prefix: "/users" });

userRouter.get("/", (ctx, next) => {
  ctx.body = "用户数据get";
});

// 让路由中的中间件生效
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(6000, () => {
  console.log("koa服务器启动成功~");
});
