const fs = require("fs");

// 创建一个写入流
const writeStream = fs.createWriteStream("./aaa.txt", {
  flags: "a+", //a+表示往最后写入的
});

writeStream.write("coderwhy");

// 操作一：将最后的内容写入文件，并关闭文件
writeStream.end("hhh");

// 此时监听.close方法能够监听的到
writeStream.on("close", (err) => {
  console.log("文件被关闭", err);
});
