//导入http模块
const http = require('http')
//创建web服务器实例
const server = http.createServer()
//为服务器实例绑定request事件，监听用户客户端的请求
server.on('request', (req, res) => {
  console.log('someone visit our web server');
})
//启动服务器
server.listen(80, () => {
  console.log('http server runnng at http://127.0.0.1')
})