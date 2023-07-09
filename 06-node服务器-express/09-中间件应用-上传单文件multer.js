const express = require("express");
const fs = require("fs");
const multer = require("multer");

// 创建中间件
const app = express();

// 应用第三方中间件multer,创建实例对象，使用实例方法

// 且文件放置的路径设置dest

// 或者可以传入详细的信息，存储的图片自定义后缀名
const upload = multer({
  // dest:'./uploads'
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, "./uploads");
    },
    filename(req, file, callback) {
      callback(null, file.originalname);
    },
  }),
});

// 编写中间件
// 单文件上传使用singer
app.post("/avator", upload.single("avator"), (req, res, next) => {
  console.log(req.file);
  res.end("文件上传成功");
});

// 启动服务器
app.listen("9000", () => {
  console.log("服务器启动成功~");
});
