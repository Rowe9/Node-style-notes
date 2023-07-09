// 为什么说是一个错误的方式，因为存取的图片读取不了

const http = require("http");
const fs = require("fs");
// 1.创建server服务器
const server = http.createServer((req, res) => {
  //创建writable的stream
  // 存文件
  const writeStream = fs.createWriteStream("./foo.png", {
    flags: "a+",
  });

  req.on("data", (data) => {
    console.log(data);
    writeStream.write(data);
  });

  req.on("end", () => {
    console.log("数据传输完成");
    writeStream.close();
    res.end("文件上传成功");
  });
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功");
});
