var content = require('./data.js');
var express = require('express')
var path = require('path');
var engine = require('ejs-locals')
var bodyParser = require('body-parser')
var user = require('./routes/user')

var app = express()
app.engine('ejs', engine)
app.set('views', './views')
app.set('view engine', 'ejs')
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

app.use('/user', user)

// 增加靜態檔案的路徑
app.use(express.static('public'))

// 增加body解析
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// var login = (req, res, next) => {
//   var _url = req.url
//   if (_url !== '/') {
//     next()
//   } else {
//     res.send('login error!!')
//   }
// }

app.get('/', (req, res) => {
  res.send('<html><head></head><body><img src="/images/og-start-bootstrap.png" /></body></html>')
})

// 有先後順序
app.use((req, res, next) => {
  console.log('In this place')
  // kk()
  next()
})

app.get('/user/:name', (req, res) => {
  var myName = req.params.name
  console.log(myName)
  var limit = req.query.limit
  res.send(myName + ',' + limit + '筆資料')
})
// http://localhost:3000/user/josh?limit=30

app.get('/search', (req, res) => {
  res.render('Search')
})

app.post('/searchList', (req, res) => {
  console.log(req.body)
  res.redirect('search')
})

app.use((req, res, next) => {
  res.status(404).send('Sorry Page NotFound')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('something error')
})


//  監聽 port 
var port = process.env.PORT || 3000
app.listen(port)