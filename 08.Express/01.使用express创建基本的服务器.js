// 导入express
const express = require('express')
// 创建web服务器
const app = express()

// app.all('/user/:id/:name', (req, res) => {
//   //设置允许跨域访问
//   res.setHeader('Access-Control-Allow-origin', '*');
//   const data = { name: 'ls', age: 18 }
//   console.log(req.params)
//   let str = JSON.stringify(data)
//   res.send(str)
// })

//监听get请求
app.get('/user', (req, res) => {
  //调用express 提供的 res.send()向客户端响应一个JSON对象
  res.send({ name: 'ls', age: 18, gender:'男' })
})

//监听post请求
app.post('/user', (req, res) => {
  //调用express 提供的 res.send()向客户端响应一个文本字符串
  res.send('请求成功')
})
app.get('/', (req, res) => {
  //通过req.query 可以获取到客户端发送过来的查询参数
  // 默认情况req.query 是一个空对象
  console.log(req.query);
  res.send(req.query)
})

//这里的:id是一个动态的参数
app.get('/user/:id', (req, res) => {
  //通过req.param 是动态匹配到的URL参数，默认是空对象
  console.log(req.params);
  res.send(req.params)
})

//启动web服务器
app.listen(8080, () => {
  console.log('8080端口启动！');
})