const fs = require("fs");

// 打开一个文件，不做其他操作
// 参数分别是：打开错误，打开正确返回一个文件描述符
fs.open("./abc1.txt", (err, fd) => {
  if (err) {
    console.log("打开错误：", err);
    return;
  }

  //   1.获取文件描述符
  console.log("打开成功：", fd);

  // 2.获取文件信息
  fs.fstat(fd, (err, stats) => {
    if (err) return;
    console.log(stats);

    // 3.手动关闭文件
    fs.close(fd);
  });
});
