//在一个自定义模块中，默认情况下，module.exports = {}

const age = 20

//向 module.exports 对象上挂载 usrname 属性
module.exports.username = '张三'

//向 module.exports 对象上挂载 sayHello 方法
module.exports.sayhello = function () {
  console.log('Hello!');
}

// module.exports.age = age

//让module.exports指向一个全新的对象
module.exports = {
  nickname: "小黑",
  sayHi() {
    console.log('Hi!');
  }
}