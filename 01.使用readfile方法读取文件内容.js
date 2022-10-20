//导入fs模块
const fs = require('fs')
// 三个参数 1.路径 2.字符编码 3.回调函数
fs.readFile('./file/1.txt', 'utf8', function (err, dataStr) {
    console.log(err);
    console.log('-------');
    //读取失败dataStr的值为undefined err的值为错误对象
    //读取成功 err的值为 err
    console.log(dataStr);
})