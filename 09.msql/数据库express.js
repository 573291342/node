const express = require('express')

const app = express()

const cors = require('cors')
app.use(cors())

const router = require('./dbapi')

app.use('/api', router)

app.listen(80, () => {
  console.log('80端口启动');
})

