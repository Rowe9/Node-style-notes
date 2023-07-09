const dotenv = require("dotenv");

dotenv.config();

// 解构使用
module.exports = { SERVER_PORT } = process.env;
