const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('第一个全局中间件');
  next()
})

app.use((req, res, next) => {
  console.log('第二个全局中间件');
  next()
})

//定义路由
app.get('/', (req, res) => {
  res.send('Home page.' )
})
app.get('/user', (req, res) => {
  res.send('User page.' )
})

app.listen(80, () => {
  console.log('80端口启动');
})