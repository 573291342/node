//1.导入fs模块，来操作文件
const fs = require('fs')

//2. 调用fs.readFile()方法读取文件
//  参数1：读取文件的存放路径
//  参数2：读取文件时候采用的编码格式，一般默认指定utf8
//  参数3：回调函数，拿到读取失败的结果 err dataStr
fs.readFile('./file/1.txt', 'utf8', function (err, dataStr) {
  // 2.1 打印失败的结果
  // 如果读取成功，则err 的值为 null
  // 如果读取失败，则err 的值为 错误对象，dataStr 的值为 undefined
    console.log(err);
  console.log('-------');
  // 2.2打印成功的结果
    console.log(dataStr);
})