const express = require('express')

const app = express()

//导入自己封装的中间件模块
const customerBodyParser = require('./15.customer-body-parser')
//将自定义的中间件函数，注册为全局可用的中间件
app.use(customerBodyParser)

app.post('/user', (req, res) => {
  res.send(req.body)
})

app.listen(80, () => {
  console.log('80端口启动');
})