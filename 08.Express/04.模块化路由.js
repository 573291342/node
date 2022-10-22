const express = require('express')
const app = express()

//app.use(express.static('/file'))
//app.use()注册全局中间件

const router = require('./router')
//注册路由模块
// app.use(router)

//为路由添加统一前缀
app.use(router)

app.listen(80, () => {
  console.log('80端口启动');
})