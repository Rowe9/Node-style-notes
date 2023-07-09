const { log } = require("console");
const fs = require("fs");

// 1.同步读取
// 传入解码格式可以把十六进制解码
// const res1 = fs.readFileSync("./abc.txt", {
//   encoding: "utf8",
// });
// console.log(res1);

// 2.异步读取：回调函数
// fs.readFile(
//   "./abc.txt",
//   {
//     encoding: "utf-8",
//   },
//   (err, data) => {
//     if (err) {
//       console.log("读取文件错误", err);
//       return;
//     }
//     console.log("读取文件结果：", data);
//   }
// );

// console.log("后续的代码~");

// 3.异步读取：promise
fs.promises
  .readFile("./abc.txt", {
    encoding: "utf-8",
  })
  .then((res) => {
    console.log("读取到文件的结果：", res);
  })
  .catch((err) => {
    console.log("读取文件错误：", err);
  });
