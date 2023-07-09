const connection = require("../app/database");

class momentService {
  async create(content, userID) {
    const statement = "INSERT INTO moment (content,user_id) VALUES (?,?)";
    const [result] = await connection.execute(statement, [content, userID]);
    return result;
  }

  // 记得给默认值，否则没有传参数的时候为空
  async queryList(offset = 0, size = 10) {
    const statement = `SELECT 
    m.id id,m.content content,m.createAt createTime,m.updateAt updateTime,
    JSON_OBJECT('id',u.id,'name',u.name,'createTime',u.createAt,'updateTime',u.updateAt) AS users,
    (SELECT COUNT(*) FROM comment WHERE comment.moment_id=m.id) AS commentCount,
    (SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id=m.id) AS labelCount
    
    FROM moment m
  LEFT JOIN users u ON u.id=m.user_id
  LIMIT ? OFFSET ?
`;
    const [result] = await connection.execute(statement, [
      String(size),
      String(offset),
    ]);
    return result;
  }

  // 根据id查询动态详情
  async queryById(id) {
    const statement = `SELECT 
    m.id id,m.content content,m.createAt createTime,m.updateAt updateTime,
    JSON_OBJECT('id',u.id,'name',u.name,'createTime',u.createAt,'updateTime',u.updateAt) AS users,
    (
      JSON_ARRAYAGG(JSON_OBJECT(
        'id',c.id,'content',c.content,'commentId',c.comment_id,
        'user',JSON_OBJECT('id',cu.id,'name',cu.name)
      ))
    ) comments
    FROM moment m
  LEFT JOIN users u ON u.id=m.user_id
  LEFT JOIN comment c ON c.moment_id=m.id
  LEFT JOIN users cu ON cu.id=c.user_id
  WHERE m.id=? 
  GROUP BY m.id;
  `;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }

  // 修改动态
  async update(content, id) {
    const statement = `UPDATE moment SET content =? WHERE id=?`;
    const [result] = await connection.execute(statement, [content, id]);
    return result;
  }

  // 删除动态
  async remove(id) {
    const statement = "DELETE FROM moment WHERE id=?;";

    const [result] = await connection.execute(statement, [id]);
    return result;
  }

  // 判断标签是否重复
  async hasLabel(momentId, labelId) {
    const statement = `SELECT * FROM moment_label WHERE moment_id= ? AND label_id= ?;`;
    const [result] = await connection.execute(statement, [momentId, labelId]);
    return Boolean(result.length);
  }

  // 加入标签
  async addLabel(momentId, labelId) {
    const statement = `INSERT INTO moment_label (moment_id,label_id) VALUES (?,?);`;
    const [result] = await connection.execute(statement, [momentId, labelId]);
    return result;
  }
}

module.exports = new momentService();
