# 1. 初始node.js
## 1.1 回顾与思考
### 1. 已经掌握了哪些技术
- html
- css
- JavaScript
### 2. 浏览器中的JavaScript的组成部分
- js核心语法(变量、数据类型、循环、分支、判断、函数、作用域、this、etc)
- WebAPI(DOM操作、BOM操作、基于XMLHttpRequest的Ajax操作、etc)
### 3. 为什么JavaScript可以在浏览器中被执行
- 浏览器中有不同的JavaScript解析引擎
> Chrome浏览器 => v8(最好)
> 火狐浏览器 => OdinMoney
> Safri浏览器 => JSCore
> ie浏览器 => chakra
### 4. 为什么JavaScript可以操作DOM和BOM
- 每个浏览器都内置了DOM、BOM这样的API，因此浏览器中的JavaScript可以调用它们
###  5. 浏览器中的JavaScript运行环境
- 运行环境是指代码正常运行的必要环境(内置API和v8解析引擎)，v8引擎负责解析和执行JavaScript代码，内置API是由运行环境提供的特殊接口，只能在所属运行环境中调用
### 6. JavaScript是否做后端开发
- 通过node.js可以进行后端开发
## 1.2 Node.js简介
### 1. 什么是Node.js
- node.js是一个基于chrome v8 引擎的JavaScript运行环境
- [官网](https://nodejs.org/zh-cn/)
### 2. node.js中的JavaScript运行环境
- 内置API和v8解析引擎 **node.js无法调用DOM和BOM等浏览器内置API**
### 3.node.js可以做什么
- 基于[Express](http://www.expressjs.com.cn/)框架，可以快速构建Web应用
- 基于[Electron](http://electronjs.org/)框架，可以构建跨平台的桌面应用
- 基于[restify](http://restify.com/)框架，可以快速构建API接口项目
- 读写和操作数据库、创建使用过的命令行工具辅助前端开发、etc..
### 4.Node.js怎么学
- JavaScript基础语法+node.js内置API模块(fs,http,path等)+第三方API模块(express,mysql等)
### 5. Node.js环境的安装[官网首页](https://nodejs.org/en)
## 1.3 Node.js环境的安装
### 1. LTS长期稳定版|current新特新测试版
### 2. 查看版本号
- 在cmd面板中输入`node -v`
### 3. 什么是终端
- 专为开发人员设计的，用于人机交互的一种方式
## 1.4 在Node.js环境中执行JavaScript代码
- 打开终端
- 输入 `node [要执行的js文件的路径]` tab键补齐路径
# 2. fs 文件系统模块
## 2.1 如何使用
### 1. 导入
- `const fs = require('fs')`
### 2. 使用
- `fs.readFile()`读取文件内容
- `fs.writeFile()`写入文件内容
## 2.2 读取内容
### 1. fs.readFile()语法格式
- `fs.readFile(path[,options],callback)`
- path 必选，字符串，表示文件路径
- options 可选，表示以什么编码格式读取文件
- callback 必选，回调函数
### 2. 示例代码
```
const fs = require('fs')
fs.readFile('./file/1.txt', 'utf8', function (err, dataStr) {
    console.log(err);
    console.log('-------');
    console.log(dataStr);
})
```
### 3.判断文件是否读取成功
- 可以判读err对象是否为null，从而知晓文件的读取结果
## 2.3向指定的文件中写入内容
### 1.fs.writeFile()的语法格式
```
fs.writeFile(file,data[,options],callback)
```
- 参数1：必选参数，需要指定一个文件的存放路径。
- 参数2：必选参数，表示要写入的内容
- 参数3：可选参数，表示以什么格式写入文件内容，默认值是utf8
- 参数4：必选参数，文件写入成功后的回调函数
### 3.可以判断err对象是否为null，从而知晓文件写入的结果
## 2.5 练习 - 整理考试成绩
- 导入fs文件系统模块
- 使用 **fs.readFile()** 方法，读取目录下的成绩.txt文件
- 判断文件是否读取失败
- 文件读取成功后，处理成绩数据
- 将处理完成的成绩数据，调用 **fs.writeFile()** 方法，写入到新的文件 **成绩-ok.txt** 中
## 2.6 模块 - 路径动态拼接问题
- 在使用fs模块操作文件时，如果提供的操作路径是以 **./** 或 **../** 开头的 **相对路径** 时，容易出现路径动态拼接错误的问题
- 原因：代码在运行的时候，**会执行node命令时所在的目录** ，动态的拼接出被操作文件的完整路径
- 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行
### 3. path路径模块
## 3.1 什么是path
- path模块是Node.js官方提供的，用来处理路径的模块
- 例如: **path.join()** 方法，用来将路径片段拼接成一个完整的路径字符串
- 语法格式：`path.join([...paths])`
- ...paths \<string> 路径片段的序列
- 返回值:\<string>
## 3.2 获取路径中的文件名
### 1. path.basename()的语法格式
- 使用 **path.basename()** 方法，可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名
- 语法格式：`path.basename(path[,ext])`
- path /<string> 必选参数，表示一个路径的字符串
- ext /<string> 可选参数，表示文件扩展名
- 返回：/<string> 表示路径中的最后一部分
## 3.3 获取路径中的文件扩展名
### 1. path.extname()语法格式
- 使用path.extname()方法，可以获取路径中的扩展名
- 语法格式：`path.extname(path)`
- path /<string> 必选参数，表示一个路径的字符串
- 返回：/<string> 返回得到的扩展名字符串
# 4.http模块
## 4.1 什么是http模块
### 1.服务器和客户端
- 消费资源的电脑叫客户端
- 提供网络资源的电脑叫服务器
- http模块是Node.js官方提供的、用来创建web服务器的模块。通过http模块提供的http.createServer()方法能把一台普通的电脑，变成一台web服务器
- 语法：`const http = require('http')`
## 4.2 服务器相关概念
### 1. IP地址
- IP地址相当于互联网上每台计算机的唯一地址
- 点分十进制(192.168.1.1)
- 注意
  * 互联网上每台web服务器，都有自己的IP地址
  * 自己的电脑也是一台服务器(127.0.0.1)
### 2. 域名和域名服务器
- 域名(IP的别名)
- 域名服务器(DNS)用于存放IP和域名
- 127.0.0.1对应localhost
### 3. 端口号
- 每一个端口号对应一个web服务
- 每个端口号不能被多个web服务所占用
- 80端口可以省略
## 4.4 创建基本的web服务器
### 1. 创建web服务器的基本步骤
- 导入http模块
  `const http = require('http')`
- 创建web服务器实例
  `const server = http.createServer()`
- 为服务器实例绑定request事件，监听客户端请求
  ```
  server.on('request', (req, res) => {
    console.log('someone visit our web server')
  })
    ```
- 启动服务器
  ```
  server.listen(80, () => {
    console.log('http server runnng at http://127.0.0.1')
  })
  ```
### 2.req请求对象
- 只要服务器接收到了客户端的请求，就会都用通过server.on()为服务器绑定的request事件处理函数，如果想在事件处理函数中，访问与客户端相关的数据和属性，可以使用如下方式：
  ```
  server.on('request', (req) => {
    //req.url 是客户端请求的URL地址
    const url = req.url
    //req.method 是客户端请求的method类型
    const method = req.method
    const str = `Your request url is ${req.url},and request method is $ {req.method}`
    console.log(str)
  })
  ```
### 3.res响应对象
- 在服务器的request事件处理函数中，如果想要访问与服务器相关的属性和数据，可以使用如下方式
  ```
  server.on('request', (req,res) => {
    //req.url 是客户端请求的URL地址
    const url = req.url
    //req.method 是客户端请求的method类型
    const method = req.method
    const str = `Your request url is ${req.url},and request method is ${req.method}`
    // 调用res.end()方法，向客户端响应一些内容
    res.end(str)
  })
  ```
### 4.解决中文乱码问题
 `res.setHeader('content-Type','text/html;charset=utf-8')`
## 4.5 根据不同的url响应不同的html内容
### 1. 核心实现步骤
- 获取 **请求的url地址**
- 设置 **默认的响应内容** 为404 Not found
- 判断用户请求的是否为 **/** 或 **/index.html** 首页
- 判断用户请求的是否为 **/about.html** 关于页面
- 设置 **Content-Type响应头**，防止中文乱码
- 使用 **res.end()** 把内容响应给客户端
# 模块化
## 1.1 什么是模块化
### 1. 模块化是指解决一个复杂问题时，自顶向下逐层把系统胡分成若干模块的过程。对于整个系统来说，模块是可组合、分解和跟换的单元。
### 2.编程领域中的模块化，就是遵守固定的规则，把一个大文件拆成独并相互依赖的多个小模块，优点
- 提高了代码的复用性 
- 提高了代码的可维护性
- 可以实现按需加载
## 1.2 模块化规范
### 1. 当大家都遵循童颜的模块化规范，降低了沟通的成本，极大的方便了各个模块的相互调用利人利己
- 使用什么样的语法格式类引入模块
- 在模块中使用什么样的语法向外暴露成员
## 2.1 Node.js中模块的分类
### 根据模块来源不同可以将模块分为三大类
- 内置模块(内置模块是由Node.js官方提供的，例如fs,path,http等)
- 自定义模块(用户自己创建的.js模块，都是自定义模块)
- 第三方模块(有第三方开发的模块，使用时需要下载)
## 加载模块
### 使用强大的require()方法，可以加载内置模块，用户自定义模块，第三方模块进行使用
- 内置模块 `require('http')`
- 用户自定义模块 `require('./custom.js')`
- 第三方模块 `require('moment')`
- **使用require()方法加载其他模块时，会执行加载模块的代码**
## 2.2 Node.js中的模块作用域
### 1.什么是模块作用域
- 和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域。
### 2.模块作用域优点
- 防止了全局变量污染的问题
## 2.3 向外共享模块作用域中的成员
### 1. module对象
- 在每个 .js 自定义模块中都有一个module对象，它里面存储了模块相关的信息
### 2. module.exports对象
- 在自定义模块中，可以使用module.exports对象，将模块内的成员共享出去，供外界使用
- 外界用require() 方法导入自定义模块时，得到的就是module.exports所指向的对象