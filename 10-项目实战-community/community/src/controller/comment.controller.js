const commentService = require("../service/comment.service");

class commentController {
  async create(ctx, next) {
    const { id } = ctx.user;
    const { content, momentId } = ctx.request.body;

    // 操作数据，将数据进行存储
    const result = await commentService.create(content, momentId, id);

    ctx.body = {
      code: 0,
      message: "发表评论成功",
      data: result,
    };
  }

  async reply(ctx, next) {
    const { content, momentId, commentId } = ctx.request.body;
    const { id } = ctx.user;

    // 对数据库的数据进行操作
    const result = await commentService.reply(content, momentId, commentId, id);
    ctx.body = {
      code: 0,
      message: "回复评论成功~",
      data: result,
    };
  }
}

module.exports = new commentController();
