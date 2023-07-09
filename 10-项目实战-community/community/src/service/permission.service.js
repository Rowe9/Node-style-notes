const connection = require("../app/database");

class PermissionService {
  // async checkMoment(momentId, userId) {
  //   const statement = "SELECT * FROM moment WHERE id=? AND user_id=?;";
  //   const [result] = await connection.execute(statement, [momentId, userId]);
  //   return Boolean(result.length);
  // }

  async checkResource(resourceName, resourceId, userId) {
    const statement = `SELECT * FROM ${resourceName} WHERE id=? AND user_id=?;`;
    const [result] = await connection.execute(statement, [resourceId, userId]);
    return Boolean(result.length);
  }
}

module.exports = new PermissionService();
