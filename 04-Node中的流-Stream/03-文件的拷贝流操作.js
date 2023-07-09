const fs = require("fs");

// 方式一：一次性读取和写入文件
// 缺点：文件太大不合适，只能一次性读取
// fs.readFile("./foo.txt", (err, data) => {
//   console.log(data);
//   fs.writeFile("./foo_copy01.txt", data, (err) => {
//     console.log("写入文件完成", err);
//   });
// });

// 方式二：创建可读流和可写流
const readStream = fs.createReadStream("./foo.txt");
const writeStream = fs.createWriteStream("./foo_copy02.txt");

readStream.on("data", (data) => {
  writeStream.write(data);
});

readStream.on("end", () => {
  writeStream.close();
});

// 方式三：在可读流和可写流之间建立一个管道
// 可读流读到的所有东西都会复制到可写流当中
readStream.pipe(writeStream);
