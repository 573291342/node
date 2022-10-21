const path = require('path')
//定义文件存放路径
const fpath = '/a/b/c/index.html';
//获取文件名
const fullName = path.basename(fpath);
console.log(fullName);
//获取去掉扩展名的文件名
const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt);

//08.path.extname()的使用
//获取文件扩展名
const fext = path.extname(fpath)
console.log(fext);