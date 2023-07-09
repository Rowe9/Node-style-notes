const LabelService = require("../service/label.service");
class LabelController {
  async create(ctx, next) {
    // 1.获取标签的名称
    const { name } = ctx.request.body;

    // 2.操作数据库存储name
    const result = await LabelService.create(name);
    ctx.body = {
      code: 0,
      data: result,
      message: "创建标签成功 ",
    };
  }

  //   展示给用户看的列表标签
  async list(ctx, next) {
    const { offset, size } = ctx.query;
    const result = await LabelService.queryList(offset, size);
    ctx.body = {
      code: 0,
      data: result,
    };
  }
}

module.exports = new LabelController();
