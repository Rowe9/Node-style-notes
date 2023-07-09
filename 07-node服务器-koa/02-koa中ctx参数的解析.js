const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  // 1.请求对象
  console.log(ctx.request); //请求对象：koa封装的请求对象
  console.log(ctx.req); //请求对象：node封装的请求对象

  // 2.响应对象
  console.log(ctx.response); //请求对象：koa封装的响应对象
  console.log(ctx.res); //请求对象：node封装的响应对象
});

app.listen(6000, () => {
  console.log("服务器启动成功~");
});
