const express = require('express')

const app = express()

//通过express.json()这个中间件解析表单中的json格式
app.use(express.json())
//通过express.urlencoded()这个中间件解析表单中的urlencoded格式
app.use(express.urlencoded({ extended: false }))

//body参数
app.post('/user', (req, res) => {
  //在服务器中，可以使用req.body 这个属性，来接收客户端发送的请求
  //在默认情况下，如果不配置解析表单数据的中间件，则，req.body默认等于undefined
  console.log(req.body);
  res.send('ok')
})

app.post('/book', (req, res) => {
  //在服务器中，可以使用req.body 这个属性来获取json格式的表单数据和url-encoded格式的数据
  console.log(req.body);
  res.send('ok')
})

app.listen(80, () => {
  console.log('80端口启动');
})