const fs = require("fs");

// 通过流来读取文件
const readStream = fs.createReadStream("./aaa.txt", {
  start: 4,
  end: 10,
  // 一次性读取字节的长度，默认是64kb
  highWaterMark: 3,
});

readStream.on("data", (data) => {
  console.log(data.toString());

  //   可读流的暂停
  readStream.pause();
});

// 可读流的其他事件监听
readStream.on("open", (fd) => {
  console.log("通过流将文件打开", fd);
});

readStream.on("end", () => {
  console.log("已经读取到end位置");
});
