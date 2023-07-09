const KoaRouter = require("@koa/router");
const { verifyAuth } = require("../middleware/login.middleware");
const { create, list } = require("../controller/label.controller");

const labelRouter = new KoaRouter({ prefix: "/label" });

labelRouter.post("/", verifyAuth, create);
// 前端可以拿到接口数据，让用户选择标签
labelRouter.get("/", list);

module.exports = labelRouter;
