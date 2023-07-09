// 写路由处理逻辑的

const userService = require("../service/user.service");

class UserController {
  async create(ctx, next) {
    // 1.获取用户传递过来的信息
    const user = ctx.request.body;
    console.log(user);

    // 2.将user信息存储到数据库当中
    const result = await userService.create(user);

    // 返回信息给前端
    ctx.body = {
      code: 0,
      message: "创建用户成功",
    };
  }
}

module.exports = new UserController();
