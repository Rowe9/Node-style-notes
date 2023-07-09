const Koa = require("koa");
const koaRouter = require("@koa/router");
const bodyParser = require("koa-bodyparser");
const multer = require("@/koa/multer");
const app = new Koa();

// 创建路由对象
const userRouter = new koaRouter({ prefix: "/users" });
// 使用第三方中间件解析json数据,urlencoded数据
app.use(bodyParser());
const formParser = multer();

/* 
1.get:params方式，例子：/:id
2.get:query方式，例子：?name=why&age=19
3.post:json方式，例子：{"name":"why","age":19}
4.post:x-www-form-unencoded
5.post:form-data
*/

// 1.
userRouter.get("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = "用户数据get:" + id;
});
// 2.
userRouter.get("/", (ctx, next) => {
  const query = ctx.query;
  console.log(query);
  ctx.body = "用户数据get:" + JSON.stringify(query);
});
// 3.
userRouter.post("./json", (ctx, next) => {
  // 拿到客户端写在body里面的数据，但是要进行解析，可以使用koa的中间件koa-bodyparser
  console.log(ctx.request.body);
  // ctx.body用于向客户端返回数据
  ctx.bdy = "用户的json数据";
});
// 4.post/urlencoded
userRouter.post("urlencoded", (ctx, next) => {
  console.log(ctx.request.body);

  ctx.body = "用户的urlencode信息";
});

// 5.post/form-data
userRouter.post("/formdata", formParser.any(), (ctx, next) => {
  console.log(ctx.request.body, ctx.req.body);
  ctx.body = "用户的formdata信息";
});

// 让路由中的中间件生效
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(6000, () => {
  console.log("koa服务器启动成功~");
});
