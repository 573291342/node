const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123',
  database: 'spring'
})

//测试mysql能否正常工作
db.query('select * from account', (err, res) => {
  if (err) return console.log(err.message);
  account = res
})

module.exports = db