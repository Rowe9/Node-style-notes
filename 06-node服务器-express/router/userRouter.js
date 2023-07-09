const express = require("express");

const userRouter = express.Router();
userRouter.get("/", (req, res, data) => {
  res.json("用户的数据");
});
userRouter.get("/:id", (req, res, data) => {
  const id = req.params.id;
  res.json("得到用户的数据：" + id);
});
userRouter.delete("/:id", (req, res, data) => {
  const id = req.params.id;
  res.json("删除用户的数据：" + id);
});
userRouter.post("/", (req, res, data) => {
  res.json("用户的数据");
});
userRouter.patch("/:id", (req, res, data) => {
  const id = req.params.id;
  res.json("修改用户的数据：" + id);
});

module.exports = userRouter;
