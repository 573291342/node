//导入fs模块
const fs = require('fs')
//三个参数 文件路径 字符串 回调函数
fs.writeFile('./file/22.txt', 'abcd', function (err) {
    // 如果成功err返回null
    // 如果文件写入失败 err 返回 错误对象
    console.log(err);
})