const express = require('express')

const app = express()

//配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

app.get('/api/jsonp', (req, res) => {
  //得到函数的名称
  const funcName = req.query.callback
  //定义要发送到客户端的数据对象
  const data = { name: 'zs', age: 22,methos:'jsonp' }
  //拼接出一个函数的调用
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  //把拼接好的字符串，响应给客户端
  res.send(scriptStr)
})

//一定要在路由之前写中间件
//解决跨域问题的中间件
const cors = require('cors')
app.use(cors())

const router = require('./16.apiRouter')
// const { json } = require('body-parser')
app.use('/api', router)

app.listen(80, () => {
  console.log("80端口启动");
})