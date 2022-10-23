const express = require('express')

const app = express()

//定义路由
app.get('/', (req, res) => {
  throw new Error('服务器内部错误')
  res.send('Home page.')
})

//定义错误级别中间件
app.use((err, req, res, next) => {
  console.log('发生了错误!' + err.message);
  res.send('Error' + err.message)
})

app.listen(80, () => {
  console.log('80端口启动');
})