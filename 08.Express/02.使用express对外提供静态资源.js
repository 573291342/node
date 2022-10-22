const express = require('express')
const app = express()

//调用express.static()方法，快速的对外提供静态资源
app.use(express.static('./01.使用express创建基本的服务器.js'))

app.use(express.static('/'))

//一般都是当前目录的名称
app.use('/public',express.static('public'))

app.listen(80, () => {
  console.log('80端口启动！');
})