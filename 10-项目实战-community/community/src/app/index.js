const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const registryRouters = require("../router/index");

const app = new Koa();
app.use(bodyParser());

registryRouters(app);

// app.use(userRouter.routes());
// app.use(userRouter.allowedMethods());
// app.use(loginRouter.routes());
// app.use(loginRouter.allowedMethods());

module.exports = app;
