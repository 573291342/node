const qs = require('querystring')

//这是解析表单数据的中间件
const bodyParser = (req, res, next) => {
  //定义中间件具体的业务逻辑
  //定义一个str字符串，专门用来存储客户端发送过来的请求体数据
  let str = ''
  //监听req的data事件
  req.on('data', (chunk) => {
    str += chunk
  })
  req.on('end', () => {
    //在str中存放的是完整的请求体数据
    // console.log(str);
    //把字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(str)
    // console.log(body);
    req.body = body
    next()
  })
}

module.exports = bodyParser