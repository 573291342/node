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
- 基于[restify](http://restify.com./)框架，可以快速构建API接口项目
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
})```
