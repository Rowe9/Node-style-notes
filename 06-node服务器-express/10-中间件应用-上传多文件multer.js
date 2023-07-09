const express = require("express");
const fs = require("fs");
const multer = require("multer");

// 创建中间件
const app = express();

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
app.post("/photos", upload.array("photos"), (req, res, next) => {
  console.log(req.files); //注意这里多文件是files，单文件是file
  res.end("文件多张图片上传成功");
});

// 启动服务器
app.listen("9000", () => {
  console.log("服务器启动成功~");
});
