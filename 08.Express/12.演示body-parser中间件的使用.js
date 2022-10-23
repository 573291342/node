const express = require('express')

const app = express()

//导入中间件
const parser = require('body-parser')
//注册中间件
app.use(parser.urlencoded({ extended: false }))

app.post('/user', (req, res) => {
  //如果没有配置任何解析表单的中间件，则req.body 默认等于 undefined
  console.log(req.body);
  res.send('ok')
})

app.listen(80, () => {
  console.log('80端口启动');
})