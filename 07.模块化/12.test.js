//在外界使用 require 导入自定义模块的时候，得到的成员
//就是 哪个模块中，通过module.export指向的那个对象
const m = require('./11.自定义模块')

console.log(m);