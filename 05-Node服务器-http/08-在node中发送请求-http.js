const http = require("http");

// 在执行这个文件的时候，必须保证服务器8000有被开启，
// 使用了09开启的服务器，在开启另外一个终端运行这个文件请求数据

// 使用http模块发送get请求
http.get("http://localhost:8000", (res) => {
  // 从可读流中获取数据
  res.on("data", (data) => {
    const dataString = data.toString();
    const dataInfo = JSON.parse(dataString);
    console.log(dataInfo);
  });
});

// 使用http模块发送post请求
// 除了get请求可以直接写，其他post,patch等请求都是使用的request
const req = http.request(
  {
    method: "POST",
    hostname: "localhost",
    port: 8000,
  },
  (res) => {
    res.on("data", (data) => {
      const dataString = data.toString();
      const dataInfo = JSON.parse(dataString);
      console.log(dataInfo);
    });
  }
);

// request指的是和服务器建立一个可读流
// 可读流可能会向服务器写入东西
// 传完之后需要主动调用end
req.end();
