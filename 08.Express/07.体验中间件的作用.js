const express = require('express')
const app = express()

app.use((req, res, next) => {
  // 获取到请求到达服务器的时间
  const time = Date.now()
  // 为req对象，挂载自定义属性，从而把时间共享给后面的所有路由
  req.startTime = time
  next()
})

app.get('/', (req, res) => {
  res.send('Home page' + req.startTime)
})
app.post('/user', (req, res) => {
  res.send('User page')
})

app.listen(80, () => {
  console.log('80端口启动' + req.startTime);
})