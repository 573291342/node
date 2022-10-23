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
# 3. path路径模块
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
### 3.export对象
- 由于module.export单词写起来比较复杂，为了简化对外共享成员的代码，Node提供了 **export** 对象。默认情况下，module.export和export指向同一个对象。最终共享的结果，还是以module.export指向的对象为准。
### 4.export和module.exports的使用误区
- 时刻谨记，require()模块时，得到的永远时module.exports指向的对象。
## 2.4 Node.js中的模块化
### 1. Node.js 遵循了CommonJS模块化规范，CommonJS规定了模块的特征和各模块之间如何相互依赖。
- commonJS规范
  - 每个模块内部，module变量代表当前模块
  - module变量是一个对象，他的export属性（即nodule.exports）是对外的接口。
  - 加载某个模块，其实是加载该模块的module.export属性，require()方法用于加载模块。
## 3.1 包
### 1. 什么是包
- Node.js 中的**第三方模块**又叫**包**
### 2. 包的来源
- 包是由第三方个人或者团队开发出来的
- **包都是免费和开源的**
### 3. 为什么需要包
- 包都是内置模块封装出来的，提供了更高级，更方便的API，极大的提高了开发的效率
### 4. 从哪里下载包
- [全球最大的包共享平台](https://www.npmjs.com/)
- 下载包地址 https://registry.npmjs.org/
### 5. 如何下载包
- node package manager 包管理工具
- `npm -v`查看自己npm的版本号
## 2.3 npm初体验
### 1. 格式化时间
- 使用npm包管理工具，在项目中安装格式化时间的包moment
- 使用require()导入格式化时间的包
- 参考moment的官方api文档对时间进行格式化
### 2. 在项目中安装包
- `npm install 包的完整名称` 或 `npm i 包的完整名称`
- 可以在包名称后面加入 **@** 符号指定包的版本号
### 3. 初次安装包后多了哪些文件
- 在项目文件夹下面多出了 **node_modules** 和 **package-lock.json** 的配置文件
- node_modules 文件夹用来存放所有已经安装到项目中的包，require()导入第三方包的时候，就是从这个目录中查找并加载包
- package-lock.json 配置文件用来记录node_modules目录下的每一个包的下载信息，例如包的名字、版本号、下载地址等
## 3.3 包管理配置文件
- 项目名称、版本号、描述等
- 项目中都用到哪些包
- 哪些包只在开发期间会用到
- 哪些包在开发和部署时都需要用到
### 1. 多人协作的问题
### 2. 如何记录项目中安装了哪些包
- 在项目目录中，创建一个叫做package.json的配置文件，即可用来记录项目中安装了哪些包，从而方便剔除node_modules目录后，在团队之间共享项目的源代码。
### 3. 快速创建package.json
- `npm init -y`
- 上面的命令只能在英文的目录下运行成功，不能有中文和空格。
- 运行npm install 命令安装包的时候,npm包管理工具会自动把包的名称和版本号记录到package.json中。
### 4. dependencices节点
- 用来记录您使用npm install 命令安装了哪些包。
- 安装多个包之间用空格隔开 
### 5. 一次性安装所有的包
- 没有安装包会报 **cannot find modules 包名称**
- 可以运行 `npm install` 一次性安装所有的依赖包
### 6. 卸载包
- 可以运行 `npm uninstall` 卸载指定包(注意uninstall不能简写)，命令执行成功后，会把卸载的包，自动从package.json中的dependencies中移除
### 7. devDependencies节点
- 如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到devDependencies节点中，与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到dependencies节点中。
- 可以使用 `npm i 包名 -D` 或 `npm i -D 包名`相当于 `npm install 包名 --save-dev`(可以在npm官网中查看是否需要这种安装方式)
## 3.4 解决下包速度慢的问题
### 1. 淘宝NPM镜像服务器
### 2. 切换npm的下包镜像源
- 查看当前的下包镜像源`npm config get registry`
- 切换下包镜像源`npm config set registry=地址`
- 淘宝镜像源 https://registry.npm.taobao.org/
### 3. nrm命令
-  为了更方便的切换下包的镜像源，可以安装nrm这个小工具
- `npm i nrm -g`
- `nrm ls`查看所有可用的镜像源
- `nrm use taobao`将下包的镜像源切换为淘宝镜像源
## 3.5 包的分类
### 1. 项目包
- 被安装到项目的node_modules中的包，都是项目包
- 开发依赖包(被记录到devDependencies节点的包，只有在开发时期会用到，安装的时候会用到 **-D** 命令)
- 核心依赖包(被记录到dependencies节点的包，在开发时期和项目上线之后都会用到)
### 2. 全局包
- 安装全局包 `npm i 包名 -g`
- 卸载全局包 `npm uninstall 包名 -g`
- 只有工具性质的包，才有全局安装的必要性，因为他提供了终端命令
- 可以查看官方文档决定是否全局安装
## 4.1 模块优先从缓存中加载 
- 模块在第一次被记载后会被缓存，require()不会导致模块的代码多次执行
- 所有的包都会优先从缓存中加载，从而提高模块的加载效率
## 4.2 内置模块的加载机制
- 内置模块是由Node.js 官方提供的模块，内置模块的加载优先级最高
## 4.3 自定义模块的加载机制
- 加载自定义模块时，必须指定以 **./** 或者 **../** 开头的路径标识符，如果没有指定则node会把他当作内置模块或第三方模块进行加载。
- 在使用require()导入自定义模块时候，如果省略了文件的扩展名，则node.js会按顺序分别尝试加载以下的文件：
  1. 按照确切的文件名进行加载
  2. 补全.js扩展名进行加载
  3. 补全.json扩展名进行加载
  4. 补全.node 扩展名进行加载
  5. 加载失败，终端报错
## 4.4 第三方模块的加载机制
- 如果传递给require()的模块标识符不是内置模块，也没有以 ./ 或../开头，则node.js会从当前的父目录开始，尝试从/node_modules 文件中加载第三方模块。如果没有找到对应的第三方模块，则移动到上一层父目录中，进行加载，直到文件系统的根目录
## 4.5 目录作为模块
- 当把目录作为模块标识符，传递给require() 进行加载的时候，有三种加载方式
  1. 在被加载的目录下查找一个叫做package.json的文件，并寻求main属性，作为require()加载的入口
  2. 如果目录没有package.json文件，或者main 入口不存在或无法解析，则Node.js将会试图加载目录下的index.js文件
  3. 如果上两步都失败，则报错 Error:Cannot find module 'xxx'
# Express
## 1.1 Express简介
### 1.什么是Express
- Express是基于Node.js平台，快速，开放，🤺的web开发框架。(和http模块类似)通俗理解就是专门用来创建web服务器的。
### 2. Express能做什么
- web网站服务器：专门对外提供Web网页资源的服务器
- API接口服务器：专门对外提供API接口的服务器
## 1.2 使用
### 1.安装
- `npm i express`
### 2.创建基本的web服务器
  ```
  // 导入express
  const express = require('express')
  // 创建web服务器
  const app = express()

  //启动web服务器
  app.listen(8080, () => {
    console.log('8080端口启动！');
  })
  ```
### 3. 监听GET请求
- 通过app.get()方法，可以监听客户端的GET请求
  ```
  //监听get请求
  app.get('/user', (req, res) => {
  //调用express 提供的 res.send()向客户端响应一个JSON对象
    res.send({ name: 'ls', age: 18, gender:'男' })
  })
  ```
### 4. 监听POST请求
- 通过app.post()方法，可以监听客户端的POST请求
  ```
  //监听post请求
  app.post('/user', (req, res) => {
  //调用express 提供的 res.send()向客户端响应一个文本字符串
    res.send('请求成功')
  })
  ```
### 5. 可以通过res.send()方法，可以把处理好的内容，发送给客户端
  `res.send({ name: 'ls', age: 18, gender:'男' })`
### 6. 获取URL中携带的查询参数
- 通过req.query()对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数
  ```
  app.get('/', (req, res) => {
    //通过req.query 可以获取到客户端发送过来的查询参数
    // 默认情况req.query 是一个空对象
    console.log(req.query);
    res.send(req.query)
  })
  ```
### 7. 获取URL中动态的参数
- 通过req.params对象，可以访问到URL中，通过：匹配的的动态参数
## 1.3 托管静态资源
### 1. express.static()
- 共享public目录下的资源`app.use(express.static('public))`
- 注意Express在指定的静态目录中查找文件，并对外提供静态资源的访问路径，因此，存放静态文件的目录名不会出现在URL中。
### 2. 托管多个静态资源
- 多次调用express.static()
  ```
  app.use(express.static('public'))
  app.use(express.static('files'))
  ```
- 访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需的文件
### 3. 挂载路径前缀
- 如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用：`app.use('/public',express.static('public'))`
## 1.4 nodemon
### 1. 为什么要使用nodemon
- 在编写调式Node.js项目的时候，能监听修改的代码
- `npm i -g nodemon`
- 由 `node 名称.js` 变为 `nodemon 名称.js`
## 2.1 路由的概念
### 1. 现实生活中的路由
- 按键与服务之间的映射关系
### 2. Express中的路由
- 在express中，路由指的是客户端与服务器处理函数之间的映射关系
- Express中的路由分3部分组成，分别是请求类型，请求的URL地址，处理函数
- 格式：`app.METHOD(PATH,HANDLER)`
### 3.Express中的路由例子
```
app.get('/', (req, res) => {
  res.send('请求成功')
})

app.post('/', (req, res) => {
  res.send('请求成功')
})
```
### 4. 路由的匹配过程
- 每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功，才会调用对应的处理函数，如果URL和请求方式同时匹配才会交给对应的处理函数。
## 2.2 路由的使用
### 1. 路由最简单的用法
- 把路由挂载到app上
```
 //挂载路由
app.get('/', (req, res) => {
  res.send('Hello world')
})
app.post('/', (req, res) => {
  res.send('Hello world')
})
```
### 2. 模块化路由
- 为了方便对路由进行模块化的管理，Express不建议将路由直接挂载到app上，而是推荐将路由抽离为单独的模块。
- 步骤
 1. 创建路由模块对应的.js文件
 2. 调用express.Router()函数创建路由对象
 3. 向路由对象上挂载具体额路由
 4. 使用modele.export向外共享路由对象
 5. 使用app.use()函数注册路由模块
 ### 3. 为路由模块添加前缀
 - 类似与托管静态资源
 ## 3.1 中间件的概念
 ### 1. 什么是中间件
 - 中间件特指业务流程的中间处理环节
 ### 2. express中间件的调用流程
 - 当一个请求到达Express服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理
 ### 3. express中间件的格式
 - express的中间件，本质上就是一个function处理函数，express中间件的格式：
  ```
  app.get('',(req,res,next)=>{
    next()
  })
  ```
 - 路由形参列表必须含有next参数，而路由处理函数只包含req和res
 ### 4. next函数的作用 
 - next函数就是实现多个中间件连续强调的关键，他表示把流转关系转交给下一个中间件或路由
 ## 3.2 定义中间件函数
 ### 1. 可以通过
  ```
  //定义一个最简单的中间件函数
  const mw = function (req, res, next) {
    console.log('这是最简单的中间件函数');
    //把流转关系，转交给下一个中间件或者路由
    next()
  } 

  ```
  ### 2. 全局生效的中间件
  - 客户端发起的任何请求，到达服务器之后，就会触发的中间件，叫做全局有效的中间件
  - 通过app.use(中间件函数)，即可定义一个全局生效的中间件
  ```
  //定义一个最简单的中间件函数
  const mw = function (req, res, next) {
    console.log('这是最简单的中间件函数');
    //把流转关系，转交给下一个中间件或者路由
    next()
  }

  //将 mw 注册为全局生效的中间件
  app.use(mw)
  ```
  - 全局中间件简化形式
  ```
  //全局中间件的简化形式
  app.use((req, res, next) => {
    console.log('这是最简单的中间件函数');
    //把流转关系，转交给下一个中间件或者路由
    next()
  })
  ```
  ### 3. 中间件的作用
  - 多个中间件之间，共享同一份req和res。基于这样的特征，我们可以在上游的中间件中，统一为req或res对象添加自定义的属性或者方法，供下游的中间件或者路由进行使用
  ### 4. 定义多个全局中间件
  - 可以使用app.use()选择定义多个全局中间件，客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行调用
  ```
  app.use((req, res, next) => {
  console.log('第一个全局中间件');
    next()
  })

  app.use((req, res, next) => {
  console.log('第二个全局中间件');
    next()
  })
  ```
  ### 5. 定义局部生效的中间件
  - 不使用app.use()定义的中间件，叫做局部生效的中间件
  ```
  //局部中间件一
  const mw1 = (req, res, next) => {
    console.log('调用了局部生效的中间件');
    next()
  }

  //定义路由
  app.get('/', mw1, (req, res) => {
    res.send('Home page.')
  })
  app.get('/user', (req, res) => {
    res.send('User page.')
  })
  ```
  ### 6. 定义多个局部中间件
  - 可以在路由中，通过两种方式使用多个局部中间件
  ```
  app.get('/', mw1, mw2, (req, res) => {
    res.send('Home page.')
  })
  app.get('/user', [mw2, mw1], (req, res) => {
    res.send('User page.')
  })
  ```
  ### 7. 使用中间件的注意事项
  - 一定要在路由之前注册中间件
  - 客户端发送过来的请求，可以连续调用多个中间件进行处理
  - 执行完中间件的业务代码后，不要忘记调用next()函数
  - 为了防止代码逻辑混乱，不要在next()函数不要再写额外代码
  - 连续调用多个中间件时，多个中间件之间，共享req和res对象的
  ## 3.3 中间件的分类
  为了方便大家理解和记忆中间件的使用，Express官方把常见的中间件用法，分成了5大类
  - 应用级别的中间件
  - 路由级别的中间件
  - 错误级别的中间件
  - Express内置的中间件
  - 第三方的中间件
  ### 1. 应用级别的中间件
  - 通过app.use()或app.get() 或app.post()，绑定到app实例上的中间件，叫做应用级别额中间件
  `app.use((req, res, next) => { next() })`
  `app.get('/', mw1, (req, res) => { res.send('Home page.') })`
  ### 2. 路由级别的中间件
  - 通过绑定到express.Router()实例上的中间件，叫做路由级别的中间件，他的用法和应用级别的中间件没有任何区别，只不过，应用界别的中间件是绑定到app实例上，路由级别的中间件绑定到router实例上
  `router.use((req, res, next) => { next() })`
  ### 3. 错误级别的中间件
  - 错误级别的中间件的作用：专门来捕获异常错误，从而防止项目一场崩溃的问题
  - 必须包含四个形参(err,req,res,next)`(err, req, res, next) => { next() }`
  - 错误级别中间件注册在所有路由之后
  ### 4. Express内置中间件
    1. express.static 托管静态资源的内置中间件(无兼容性)
    2. express.json 解析JSON格式的请求体数据(有兼容性)
    `app.use(express.json())`
    3. express.urlencoded 解析URL-eneoded格式的请求体数据(有兼容性)
    `app.use(express.urlencoded({ extended: false }))`
  ### 5. 第三方的中间件
  - 非Express官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件，在项目中，大家可以按需下载并配置第三方中间件，从而提高项目的开发效率。
  - body-parser中间件
   1. 运行`npm i body-parser`中间件
   2. 使用require导入中间件
   3. 调用app.use()注册并使用中间件
  ## 3.4 自定义中间件
  ### 1. 需求描述与实现步骤
  - 定义中间件
  - 监听 req 的 data 事件
  - 监听 req 的 end 事件
  - 使用 querystring 模块解析请求体数据
  - 将解析出来的数据对象挂载为req.body
  - 将自定义中间件封装为模块
  ### 2. 监听req的data事件
  - 在中间件中，需要监听req对象的data事件，来获取客户端发送到服务器的数据，客户端会把数据切割后，分批发送到服务器，因此每次一次触发data事件时，接受到的可能是数据的一部分
  ### 3. 监听req的end事件
  - 当请求体数据接受完毕后，会自动触发req的end事件
  ### 4. 使用querystring 模块解析请求体数据
  - Node.js 内置了一个querystring 模块，专门用来处理查询的字符串，通过这个模块提供的parse()函数，就可以轻松把查询字符串，解析成对象的格式
  ### 5. 将解析出来的数据对象挂载为req.body 
  - 上游的中间件和下游的中间件之间共享一份req和res，因此我们可以将解析出来的数据挂载为req的自定义属性，命名为req.body，供下游使用
  ### 6. 将自定义中间件封装为模块
  ## 4.1 使用express写接口
  ## 4.2 创建API路由模块
  ## 4.3 编写GET请求
  ## 4.4 编写POST请求
  ## 4.5 CORS跨域资源共享
  ### 1. 接口的跨域问题
  - 刚才编写的GET和POST接口，存在一个很严重的问题，不支持跨域
  - 解决方法
    1. cors 主流方法
    2. JSONP 只支持GFT请求
  ### 2. 使用cors中间件解决跨域问题
  - 步骤 
    1. 运行`npm i cors`安装中间件
    2. 使用`const cors = require('cors')`导入中间件
    3. 在路由之前调用`app.use(cors())`配置中间件
  ### 3. 什么是cors
  - cors是由一系列的http响应头组成的，这些HTTP响应头决定浏览器是否阻止前端js代码跨域获取资源
  ### 4. 注意事项
  - cors主要在服务端进行配置，客户端浏览器无需做任何额外的配置
  - 有兼容性，只有支持XMLHttpRequest level2的浏览器才能使用
  ### 5. cors响应头 Access-Control-Allow-Origin 制定了允许访问资源的外域 URL
  ```
  res.setHeader('Access-Control-Allow-Origin', 'http://bruceblog.io')
  res.setHeader('Access-Control-Allow-Origin', '*')
  ```
  ### 6. cors响应头 Access-Control-Allow-Headers
  - 默认情况下，CORS 仅支持客户端向服务器发送如下的 9 个请求头：Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width 、Content-Type （值仅限于 text/plain、multipart/form-data、application/x-www-form-urlencoded 三者之一）
  - 如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过 Access-Control-Allow-Headers 对额外的请求头进行声明，否则这次请求会失败！
  `res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header')`
  ### 7. cors响应头 Access-Control-Allow-Methods
  - 默认情况下，CORS 仅支持客户端发起 GET、POST、HEAD 请求。如果客户端希望通过 PUT、DELETE 等方式请求服务器的资源，则需要在服务器端，通过 Access-Control-Alow-Methods 来指明实际请求所允许使用的 HTTP 方法
  ```
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, HEAD')
  res.setHEader('Access-Control-Allow-Methods', '*')
  ```
  ### 8. CORS请求的分类
  ### 9. 简单请求
  - 请求方式：GET、POST、HEAD 三者之一
  - HTTP 头部信息不超过以下几种字段：无自定义头部字段、Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width 、Content-Type（只有三个值 application/x-www-form-urlencoded、multipart/form-data、text/plain）
  ### 10. 预检请求
  - 请求方式为 GET、POST、HEAD 之外的请求 Method 类型
  - 请求头中包含自定义头部字段
  - 向服务器发送了 application/json 格式的数据
    在浏览器与服务器正式通信之前，浏览器会先发送 OPTION 请求进行预检，以获知服务器是否允许该实际请求，所以这一次的 OPTION 请求称为“预检请求”。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据
  ### 11. 简单请求和预检请求的区别
  - 简单请求；服务器和客户端只会发生一次请求
  - 预检请求；服务器和客户端只会发生两次请求，预检请求成功后，才会发生真正的请求
  ## 4.6 jsonp接口
  ### 1. 什么是jsonp
  - 浏览器通过\<script>标签的src属性，请求服务器上的数据，同时，服务器返回一个函数的调用
  - 特点
    1. jsonp 不属于真正的ajax请求，因为它没有使用XMLHttpRequest这个功能
    2. jsonp仅支持POST、PUT、DELETE等请求
  ### 2. 注意事项 
  - 为了防止冲突必须在cors之前配置jsonp接口
  ### 3. 步骤
  ```
  app.get('/api/jsonp', (req, res) => {
    //得到函数的名称
    const funcName = req.query.callback
    //定义要发送到客户端的数据对象
    const data = { name: 'zs', age: 22,methos:'jsonp' }
    //拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    //把拼接好的字符串，响应给客户端
    res.send(scriptStr)
  })
  ```
  # MySQL数据库操作
  ## 4.1 在项目中的操作数据库的步骤
  - 安装操作数据库的第三方模块mysql
  - 通过mysql模块连接到MySQL数据库
  - 通过mysql模块执行SQL语句
  ### 1. 安装
  `npm i mysql`
  ### 2. 配置
  ```
  const mysql = require('mysql')

  const db = mysql.createPool({
    host: '127.0.0.1', //本机数据库
    user: 'root', // 用户名
    password: '123', // 密码
    database: 'spring' // 数据库名
  })
  ```
  ### 3. 检测MySQL模块是否正常工作
  ```
  //测试mysql能否正常工作
  db.query('select * from account', (err, res) => {
    if (err) return console.log(err.message);
    account = res
  })
  ```
  ### 4. 数据库执行增删改查
  - 文件地址('./09.msql')