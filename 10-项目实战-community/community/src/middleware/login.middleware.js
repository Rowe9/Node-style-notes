const jwt = require("jsonwebtoken");
const userService = require("../service/user.service");
const md5password = require("../utils/md5-password");
const { public_key, private_key } = require("../config/screct");

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;

  // 1.验证账号密码是否为空
  if (!name || !password) {
    return ctx.app.emit("error", "name_or_password_is_required", ctx);
  }
  // 2.验证在数据库中是否已经存在
  const users = await userService.findUserByName(name); //会返回一个数组
  const user = users[0];
  if (!user) {
    return ctx.app.emit("error", "name_is_not_existed", ctx);
  }
  // 3.查询数据库中账号密码是否一致
  if (user.password !== md5password(password)) {
    return ctx.app.emit("error", "password_is_incorrect", ctx);
  }

  //   把user数据存到ctx里面，这样别的文件也可以使用
  ctx.user = user;
  // 执行下一个中间件
  await next();
};

const verifyAuth = async (ctx, next) => {
  // 要访问login下的其它接口必须得携带token
  // 1.拿到token,注意bearer后面有空格
  const authorization = ctx.headers.authorization;
  // console.log("authorization", authorization);
  if (!authorization) {
    return ctx.app.emit("error", "unauthorization", ctx);
  }
  const token = authorization.replace("Bearer ", "");
  // console.log(token);
  // 2.验证token是否正确
  try {
    const result = jwt.verify(token, public_key, {
      algorithms: ["RS256"],
    });
    // 将token的信息保留下来
    ctx.user = result;
    // 执行下一个中间件
    await next();
  } catch (error) {
    console.log("?");
    ctx.app.emit("error", "unauthorization", ctx);
  }
};

module.exports = { verifyLogin, verifyAuth };
