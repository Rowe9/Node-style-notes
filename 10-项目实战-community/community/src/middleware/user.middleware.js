const userService = require("../service/user.service");
const md5password = require("../utils/md5-password");
//   1.验证用户的逻辑
const verifyUser = async (ctx, next) => {
  // 判空
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    return ctx.app.emit("error", "name_or_password_is_required", ctx);
  }
  // 判断name是否在数据库中已经存在
  const users = await userService.findUserByName(name);
  if (users.length) {
    return ctx.app.emit("error", "name_is_already_existed", ctx);
  }

  // 执行下一个中间件
  await next();
};

// 2.对密码进行加密操作
const handlePassword = async (ctx, next) => {
  // 1.拿到密码
  const { password } = ctx.request.body;
  // 2.对密码进行加密并赋值给body
  ctx.request.body.password = md5password(password);
  // 执行下一个中间件
  await next();
};

module.exports = { verifyUser, handlePassword };
