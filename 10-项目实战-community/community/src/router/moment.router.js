const KoaRouter = require("@koa/router");
const { verifyAuth } = require("../middleware/login.middleware");
const {
  create,
  list,
  detail,
  update,
  remove,
  addLabels,
} = require("../controller/moment.controller");
const verifyPermission = require("../middleware/permission.middleware");
const verifyLabelExists = require("../middleware/label.middleware");

const momentRouter = new KoaRouter({ prefix: "/moment" });

// 增：创建新动态
momentRouter.post("/", verifyAuth, create);
// 获取用户动态列表，不需要登录也能看到
momentRouter.get("/", list);
// 查：获取动态的详情
momentRouter.get("/:momentId", detail);

// 删：删除动态
momentRouter.delete("/:momentId", verifyAuth, verifyPermission, remove);
// 改：修改动态
momentRouter.patch("/:momentId", verifyAuth, verifyPermission, update);

// 为动态添加标签
momentRouter.post(
  "/:momentId/labels",
  verifyAuth,
  verifyPermission,
  verifyLabelExists,
  addLabels
);

module.exports = momentRouter;
