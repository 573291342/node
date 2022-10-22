//导入模块
const TIME = require('./dateFormate')
const moment = require('moment')

//调用方法
const dt = new Date()

// console.log(dt);
// console.log(TIME);

const newDT = TIME.dateFormate(dt)

console.log(newDT);

const momentDT = moment().format('YYYY-MM-DD HH:mm:ssa')

console.log(momentDT);