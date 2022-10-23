const express = require('express')

const router = express.Router()

const db = require('./01.操作数据库')

router.get('/account', (req, res) => {
  let sql = 'select * from account'
  db.query(sql, (err, data) => {
    if (err) return console.log('查询失败');
    //执行结果是对象数组
    res.send(data)
  })
})

router.get('/addAccount', (req, res) => {
  let sql = 'insert into account (username,balance) values(?,?)'
  const user = req.query
  db.query(sql, [user.username, user.balance], (err, data) => {
    if (err) return console.log('查询失败');
    if (data.affectedRows > 0) {
      res.send('插入数据成功')
    }
  })
})

router.get('/deleteAccount', (req, res) => {
  let sql = 'delete from account where username = ?'
  const user = req.query
  db.query(sql, [user.username], (err, data) => {
    if (err) return console.log('删除失败');
    if (data.affectedRows > 0) {
      res.send('删除数据成功')
    }
  })
})

router.get('/updateAccount', (req, res) => {
  let sql = 'update account set balance = ? where username = ? '
  const user = req.query
  db.query(sql, [user.balance, user.username], (err, data) => {
    if (err) return console.log('跟新失败');
    if (data.affectedRows > 0) {
      res.send('跟新数据成功')
    }
  })
})

module.exports = router