const http = require('http')
const server = http.createServer()

server.on('request', (req,res) => {
  // 获取 请求的url地址
  const url = req.url
  // 设置 默认的响应内容 为404 Not found
  let content = '404 Not found'
  // 判断用户请求的是否为 / 或 /index.html 首页
  // 判断用户请求的是否为 /about.html 关于页面
  if (url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>'
  } else if (url === '/about.html') {
    content = '<h1>关于页面</h1>'
  }
  // 设置 Content-Type响应头，防止中文乱码
  res.setHeader('content-Type', 'text/html;charset=utf-8')
  // 使用 res.end() 把内容响应给客户端
  res.end(content)
})

server.listen(80, () => {

})