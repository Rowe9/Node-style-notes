const fs = require("fs");
const Koa = require("koa");
const KoaRouter = require("@koa/router");
const jwt = require("jsonwebtoken");

const app = new Koa();

const userRouter = new KoaRouter({ prefix: "/users" });

const secretkey = "aaaassss111";
userRouter.get("/login", (ctx, next) => {
  // 1.颁发token
  const payload = { id: 111, name: "why" };
  const token = jwt.sign(payload, secretkey, {
    // 设置过期时间
    expiresIn: 60,
  });

  ctx.body = {
    code: 0,
    token,
    message: "登录成功，可以进行其他操作",
  };
});

userRouter.get("/list", (ctx, next) => {
  // 获取客户端携带过来的token
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");
  // 验证token正确性与是否有效
  jwt.verify(token, secretkey);
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(7000, () => {
  console.log("服务器启动成功");
});
