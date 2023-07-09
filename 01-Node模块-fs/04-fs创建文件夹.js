const fs = require("fs");

// 创建文件夹
fs.mkdir("./why", (err) => {
  console.log(err);
});
