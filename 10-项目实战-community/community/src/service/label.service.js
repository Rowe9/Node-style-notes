const connection = require("../app/database");

class LabelService {
  async create(name) {
    const statement = "INSERT INTO label (name) VALUES (?)";
    const [result] = await connection.execute(statement, [name]);
    return result;
  }

  // 查看所有的label标签
  async queryList(offset, size) {
    const statement = "SELECT * FROM label  LIMIT ? OFFSET ?;";
    const [result] = await connection.execute(statement, [
      String(size),
      String(offset),
    ]);
    return result;
  }

  // 查询当前标签是否存在
  async queryLabelByName(name) {
    const statement = "SELECT * FROM label WHERE name = ?;";
    const [result] = await connection.execute(statement, [name]);
    return result[0];
  }
}

module.exports = new LabelService();
