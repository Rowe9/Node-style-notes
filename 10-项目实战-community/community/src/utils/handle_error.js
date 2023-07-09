const app = require("../app");

app.on("error", (error, ctx) => {
  let code = 0;
  let message = "";

  switch (error) {
    case "name_or_password_is_required":
      code = -1001;
      message = "用户名或密码不能为空";
      break;

    case "name_is_already_existed":
      code = -1002;
      message = "用户名已经存在！";
      break;

    case "name_is_not_existed":
      code = -1003;
      message = "用户名不存在";
      break;

    case "password_is_incorrect":
      code = -1004;
      message = "密码不正确";
      break;

    case "unauthorization":
      code = -1005;
      message = "token无效或已经过期";
      break;

    case "operation_is_not_allowed":
      code = -1006;
      message = "抱歉，您暂无权限操作";
      break;
  }

  ctx.body = {
    code,
    message,
  };
});
