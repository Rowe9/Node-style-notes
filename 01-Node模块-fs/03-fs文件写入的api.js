const { log } = require("console");
const fs = require("fs");

const content = "你好，小猪猪";

fs.writeFile("./abc2.txt", content, (err) => {
  if (err) {
    console.log("文件写入错误：", err);
    return;
  }
  console.log("文件写入成功");
});
