const express = require("express");
const userRouter = require("./router/userRouter");

// 创建中间件
const app = express();

// 编写中间件
app.post("/login", (req, res, next) => {});

// 1.将用户的接口直接定义在app中
// app.get('/users',(req,res,data)=>{})
// app.get('/users/:id',(req,res,data)=>{})
// app.delete('/users/:id',(req,res,data)=>{})
// app.post('/users',(req,res,data)=>{})
// app.patch('/users/:id',(req,res,data)=>{})

// 2.将用户的接口直接定义在路由中
// const userRouter = express.Router();
// userRouter.get("/", (req, res, data) => {
//   res.json("用户的数据");
// });
// userRouter.get("/:id", (req, res, data) => {
//   const id = req.params.id;
//   res.json("得到用户的数据：" + id);
// });
// userRouter.delete("/:id", (req, res, data) => {
//   const id = req.params.id;
//   res.json("删除用户的数据：" + id);
// });
// userRouter.post("/", (req, res, data) => {
//   res.json("用户的数据");
// });
// userRouter.patch("/:id", (req, res, data) => {
//   const id = req.params.id;
//   res.json("修改用户的数据：" + id);
// });

// 让路由生效
app.use("/users", userRouter);

// 启动服务器
app.listen("9000", () => {
  console.log("服务器启动成功~");
});
