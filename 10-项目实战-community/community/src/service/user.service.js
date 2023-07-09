// 写数据库查询语句的

const connection = require("../app/database");

class UserService {
  async create(user) {
    // 1.获取用户user
    const { name, password } = user;

    const statement = "INSERT INTO `users` (name,password) VALUES (?,?); ";

    const result = await connection.execute(statement, [name, password]);
    return result;
  }

  //   2.查询用户是否在数据库中存在,这个函数会返回一个数组
  async findUserByName(name) {
    const statement = "SELECT * FROM `users` WHERE name=?";
    const [values] = await connection.execute(statement, [name]);
    return values;
  }
}

module.exports = new UserService();
