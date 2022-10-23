const express = require('express')

const app = express()

//局部中间件一
const mw1 = (req, res, next) => {
  console.log('调用了第一个局部生效的中间件');
  next()
}

const mw2 = (req, res, next) => {
  console.log('调用了第二个局部生效的中间件');
  next()
}

//定义路由
app.get('/', mw1, mw2, (req, res) => {
  res.send('Home page.')
})
app.get('/user', [mw2, mw1], (req, res) => {
  res.send('User page.')
})

app.listen(80, () => {
  console.log('80端口启动');
})