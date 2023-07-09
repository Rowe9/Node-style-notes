// 创建一个buffer
const buf = Buffer.from("hello");
console.log(buf);
/* <Buffer 68 65 6c 6c 6f> */

// 创建buffer,字符串中含有中文,一个中文需要三个字节来表示
const buf1 = Buffer.from("你好啊");
console.log(buf1);
// <Buffer e4 bd a0 e5 a5 bd e5 95 8a>

// 要转换为字符串就是要toString()方法
