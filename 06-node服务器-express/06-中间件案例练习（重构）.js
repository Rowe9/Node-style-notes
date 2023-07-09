const express = require("express");

const app = express();

// 利用中间件的特性：会匹配到第一个符合条件的中间件
// app.use((req, res, next) => {
//   if (req.headers["content-type"] === "application/json") {
//     req.on("data", (data) => {
//       const jsonInfo = JSON.parse(data.toString());
//       req.body = jsonInfo;
//     });

//     req.on("end", () => {
//       next();
//     });
//   } else {
//     next();
//   }
// });

// 直接使用express提供给我们的中间件
app.use(express.json());

app.post("/login", (req, res, next) => {
  console.log(req.body);
});

app.get("/registry", (req, res, next) => {});

app.listen(9000, () => {
  console.log("服务器启动成功");
});
