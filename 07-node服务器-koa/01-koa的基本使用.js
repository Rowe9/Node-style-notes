const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  // 给客户端返回数据
  ctx.body = "hahaha";
});

app.listen(6000, () => {
  console.log("服务器启动成功~");
});
