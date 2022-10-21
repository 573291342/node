//在一个自定义模块中，默认情况下，module.exports = {}

const age = 20

//向 module.exports 对象上挂载 usrname 属性
module.exports.username = '张三'

//向 module.exports 对象上挂载 sayHello 方法
module.exports.sayhello = function () {
  console.log('Hello!');
}

// module.exports.age = age