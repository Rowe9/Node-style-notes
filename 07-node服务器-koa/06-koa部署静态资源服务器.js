const Koa = require("koa");
const static = require("koa-static");

const app = new Koa();

app.use(static("./xxxx"));

app.listen(6000, () => {
  console.log("koa服务器启动成功~");
});
