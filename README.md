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
