const jwt = require("jsonwebtoken");
const { private_key } = require("../config/screct");
// 登陆成功的处理，颁发令牌
class loginController {
  // 颁发令牌，存入token
  sign(ctx, next) {
    const { id, name } = ctx.user;
    const token = jwt.sign({ id, name }, private_key, {
      expiresIn: 24 * 60 * 60,
      algorithm: "RS256",
    });

    ctx.body = {
      code: 0,
      data: {
        id,
        name,
        token,
      },
    };
  }

  test(ctx, next) {
    ctx.body = "验证身份通过！";
  }
}

module.exports = new loginController();
