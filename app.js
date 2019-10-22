var content = require('./data.js');
var express = require('express')
var app = express()
var path = require('path');
var a = 1;

console.log(a);
console.log(content);
console.log(content.obj);

console.log(__dirname);
console.log(__filename);

// 抓目錄路徑
console.log(path.dirname('./xx/yy/zz.js'));
// 路徑合併
console.log(path.join(__dirname, '/xx'));
// 抓檔名
console.log(path.basename('./xx/yy/zz.js'));
// 抓副檔名
console.log(path.extname('./xx/yy/zz.js'));
// 分析路徑
console.log(path.parse('./xx/yy/zz.js'));

app.get('/', (req, res) => {
  res.send('test 123')
}) 

app.get('/user/:name', (req, res) => {
  var myName = req.params.name
  console.log(myName)
  var limit = req.query.limit
  res.send(myName + ',' + limit + '筆資料')
})
// http://localhost:3000/user/josh?limit=30

//  監聽 port 
var port = process.env.PORT || 3000
app.listen(port)