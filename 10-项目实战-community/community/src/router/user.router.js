const KoaRouter = require("@koa/router");

const userRouter = new KoaRouter({ prefix: "/users" });

const { create } = require("../controller/user.controller");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");

userRouter.post("/", verifyUser, handlePassword, create);

module.exports = userRouter;
