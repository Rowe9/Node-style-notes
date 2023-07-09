const mysql = require("mysql2");

// 创建一个连接池，连接上数据库
const connection = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "A2577107lfm@",
  database: "test_demo",
  connectionLimit: 5,
});

// 1.执行操作语句，操作数据库
const statement1 = "SELECT * FROM `t_products`;";
connection.query(statement1, (err, values, fields) => {
  if (err) {
    console.log("出现错误：", err);
    return;
  }

  // 查看结果
  console.log(values);
  console.log(fields);
});

// 2.执行预处理语句
const statement2 = "SELECT * FROM  `t_products` WHERE price>?;";
connection.execute(statement2, [3000], (err, values) => {
  console.log(values);
});
