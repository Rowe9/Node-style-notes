const fs = require("fs");
const path = require("path");

// 默认情况下相对目录和node程序的启动目录有关系
// const private_key = fs.readFileSync(".src/config/keys/private.key");
// const public_key = fs.readFileSync(".src/config/keys/public.key");

const private_key = fs.readFileSync(
  path.resolve(__dirname, "./keys/private.key")
);
const public_key = fs.readFileSync(
  path.resolve(__dirname, "./keys/public.key")
);

module.exports = { private_key, public_key };
