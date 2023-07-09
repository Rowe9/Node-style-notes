const fs = require("fs");

// 1.读取文件夹
// fs.readdir("./why", (err, files) => {
//   // 展现为一个字符串的数组
//   console.log(files);
// });

// 2.读取文件夹，获取到文件夹中文件的信息，只会拿到最外层文件的信息
// fs.readdir("./why", { withFileTypes: true }, (err, files) => {
//   files.forEach((item) => {
//     if (item.isDirectory()) {
//       console.log("item是一个文件夹：", item.name);
//     } else {
//       console.log("item是一个文件：", item.name);
//     }
//   });
// });

// $ node 05-fs读取文件夹.js
// item是一个文件夹： aaa
// item是一个文件夹： bbb

// 3.递归的方式，读取文件夹的所有文件
function readDirectory(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    files.forEach((item) => {
      if (item.isDirectory()) {
        readDirectory(`${path}/${item.name}`);
      } else {
        console.log("item是一个文件：", item.name);
      }
    });
  });
}
readDirectory("./why");

// $ node 05-fs读取文件夹.js
// item是一个文件： aaa.js
// item是一个文件： bbb.js
// item是一个文件： ccc.js
