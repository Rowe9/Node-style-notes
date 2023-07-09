const momentService = require("../service/moment.service");
class momentController {
  async create(ctx, next) {
    // 拿到用户发表的内容
    const { content } = ctx.request.body;
    // 拿到用户的id
    const { id } = ctx.user;
    // 将动态相关的数据保存到数据库
    const result = await momentService.create(content, id);

    ctx.body = {
      code: 0,
      message: "用户发表动态成功",
      data: result,
    };
  }

  async list(ctx, next) {
    // 获取offset，size
    const { offset, size } = ctx.query;
    // 从数据库中查询动态列表
    const result = await momentService.queryList(offset, size);

    // 返回数据
    ctx.body = {
      code: 0,
      data: result,
    };
  }

  async detail(ctx, next) {
    // 获取动态的id
    const { momentId } = ctx.params;

    // 根据id查询动态详情
    const result = await momentService.queryById(momentId);

    // 返回数据
    ctx.body = {
      code: 0,
      message: result,
    };
  }

  // 更新操作
  async update(ctx, next) {
    // 获取那条动态
    const { momentId } = ctx.params;
    // 修改的内容
    const { content } = ctx.request.body;
    // 从数据库中修改动态
    const result = await momentService.update(content, momentId);

    ctx.body = {
      code: 0,
      message: "修改动态成功",
      data: result,
    };
  }

  // 删除操作
  async remove(ctx, next) {
    // 获取删除动态的id
    const { momentId } = ctx.params;

    // 执行数据库删除操作
    const result = await momentService.remove(momentId);

    ctx.body = {
      code: 0,
      message: "删除动态成功",
      data: result,
    };
  }

  // 为moment添加label
  async addLabels(ctx, next) {
    // 获取一些参数
    const labels = ctx.labels;
    const { momentId } = ctx.params;

    // 将moment_id和label_id添加moment_label关系表
    for (const label of labels) {
      // 判断label_id是否已经和moment_id已经存在该数据
      const isExists = await momentService.hasLabel(momentId, label.id);
      if (!isExists) {
        // 不存在该moment_id和label_id的关系数据
        const result = await momentService.addLabel(momentId, label.id);
      }
    }

    ctx.body = {
      momentId,
      labels,
    };
  }
}

module.exports = new momentController();
