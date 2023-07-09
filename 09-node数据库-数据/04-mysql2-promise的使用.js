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

// 1.执行预处理语句
const statement = "SELECT * FROM  `t_products` WHERE price>?;";
createPool
  .promise()
  .execute(statement, [1000, 9])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// 打印结果包含values和fields两个数组，如果想拿到单个数据，那就解构出来
