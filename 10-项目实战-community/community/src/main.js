const app = require("./app/index");
const { SERVER_PORT } = require("./config/server");
// 引入这个不是为了拿到什么东西，而是为了执行一次文件里面的代码
require("./utils/handle_error");

app.listen(SERVER_PORT, () => {
  console.log("服务器启动成功");
});
