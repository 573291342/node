//导入fs模块
const fs = require('fs')

const path = require('path')
//如果提供的操作路径是以 ./ 或 ../ 开头的相对路径时，容易出现路径动态拼接错误的问题
fs.readFile('./file/1.txt', 'utf8', function (err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message);
  }
  console.log('读取文件成功！' + dataStr);
})

//如果要解决这个问题，可以直接提供一个完整的文件存放路径就行
//移植性非常差，并且不利于维护
fs.readFile('D:\\webpack学习\\node\\file\\1.txt', 'utf8', function (err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message);
  }
  console.log('读取文件成功！' + dataStr);
})

fs.readFile(path.join(__dirname, '/file/1.txt'), 'utf8', function (err, dataStr) {
  // fs.readFile(__dirname + '/file/1.txt', 'utf8', function (err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message);
  }
  console.log('读取文件成功！' + dataStr);
})

//表示当前文件所处的目录
// console.log(__dirname);