const express = require('express')
const session = require('express-session')
const app = express()
const jwt = require('jsonwebtoken')
const { expressjwt: expressJWT } = require("express-jwt");

//设置跨域请求
const cors = require('cors')
app.use(cors())

//导入中间件,解析请求体
const parser = require('body-parser')
//注册中间件
app.use(parser.urlencoded({ extended: false }))

app.use(session({
  secret: 'users',
  resave: false,
  saveUninitialized: true
}))

//登录接口
app.post('/api/login', (req, res) => {
  if (req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登录失败' })
  }
  req.session.user = req.body
  req.session.islogin = true
  res.send({ status: 0, msg: '登录成功' })
})

//获取登录的名字
app.get('/api/username', (req, res) => {
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: 'fail' })
  }

  res.send({
    static: 0,
    msg: 'success',
    username: req.session.user.username,
  })
})

//退出登录接口
app.post('/api/logout', (req, res) => {
  req.session.destroy()
  res.send({
    status: 0,
    msg: '退出登录成功'
  })
})

//jwt
const secretKey = 'jwt No1 ^_^'

app.use(
  expressJWT({
    secret: secretKey,
    algorithms: ["HS256"],
  }).unless({ path: [/^\/api\//] })
);

app.post('/api/jwtlogin', (req, res) => {
  const userinfo = req.body
  if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
    return res.send({ status: 400, msg: '登录失败' })
  }
  const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '120s' })
  res.send({
    status: 200,
    msg: '登录成功',
    token: tokenStr,
  })
})

app.get('/admin/getInfo', (req, res) => {
  console.log(req.auth);
  res.send({
    status: 200,
    msg: '获取用户信息成功',
    data: req.auth,
  })
})

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.send({ status: 401, message: '无效token' })
  }
  res.send({ status: 500, message: '未知错误' })
})

app.listen(80, () => {
  console.log('80端口启动');
})