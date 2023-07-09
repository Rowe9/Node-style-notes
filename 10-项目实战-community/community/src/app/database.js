const mysql = require("mysql2");

const connectionPool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "community",
  password: "A2577107lfm@",
  connectionLimit: 5,
});

// 获取连接是否成功
// 连接数据库的

connectionPool.getConnection((err, connection) => {
  // 判断是否有错误信息
  if (err) {
    console.log("连接失败：", err);
    return;
  }

  connection.connect((err) => {
    if (err) {
      console.log("和数据库交互失败");
    } else {
      console.log("交互成功");
    }
  });
});

const connection = connectionPool.promise();

module.exports = connection;
