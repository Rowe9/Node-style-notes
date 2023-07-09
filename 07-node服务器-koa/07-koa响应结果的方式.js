const Koa = require("koa");
const koaRouter = require("@koa/router");
const fs = require("fs");
const app = new Koa();

// 创建路由对象
const userRouter = new koaRouter({ prefix: "/users" });

userRouter.get("/", (ctx, next) => {
  //   // 1.body的类型是string
  //   ctx.body = "用户数据get";

  //   // 2.body的类型是buffer
  //   ctx.body = Buffer.from("你好");

  //   3.body的类型是stream
  //   const readStream = fs.createReadStream(
  //     "../06-node服务器-express/uploads/微信图片_20200905011549.jpg"
  //   );
  //   //   让客户端对图片解析成image格式
  //   ctx.type = "image/jpg";
  //   ctx.body = readStream;

  // 4.body的类型是数据（Array/object)==>使用最多
  ctx.body = {
    code: 0,
    data: [
      { name: "why", age: 19 },
      { name: "kobe", age: 20 },
    ],
  };
});

// 让路由中的中间件生效
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(6000, () => {
  console.log("koa服务器启动成功~");
});
