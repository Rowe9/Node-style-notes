// 9个字节大小的buffer内存空间
const buf = Buffer.alloc(9);
console.log(buf);

// 手动对每个字节进行访问
console.log(buf[0]);
console.log(buf[1]);

// 手动对每个字节进行操作
buf[0] = 100;
