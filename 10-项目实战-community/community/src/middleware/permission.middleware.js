const permissionService = require("../service/permission.service");

// const verifyMomentPermission = async (ctx, next) => {
//   // 1.获取登录用户的id，修改动态的id
//   const { momentId } = ctx.params;
//   const { id } = ctx.user;

//   // 2.查看user的id是否有修改momentId的权限
//   const isPermission = await permissionService.checkMoment(momentId, id);
//   if (!isPermission) {
//     return ctx.app.emit("error", "operation_is_not_allowed", ctx);
//   }
//   console.log("有权限删除");
//   await next();
// };

const verifyPermission = async (ctx, next) => {
  // 1.获取登录用户的id
  const { id } = ctx.user;
  // 2.获取资源的moment,user,comment,label
  const keyName = Object.keys(ctx.params)[0];
  const resourceId = ctx.params[keyName];
  const resourceName = keyName.replace("Id", "");
  // 2.查看user的id是否有修改momentId的权限
  const isPermission = await permissionService.checkResource(
    resourceName,
    resourceId,
    id
  );
  if (!isPermission) {
    return ctx.app.emit("error", "operation_is_not_allowed", ctx);
  }
  console.log("来到了verifyPermission");
  await next();
};

module.exports = verifyPermission;
