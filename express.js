var express = require('express')

var app = express()

console.log(app)

app.get('/', (req, res) => {
  res.send('test 123')
})

//  監聽 port 
var port = process.env.PORT || 3000
app.listen(port)