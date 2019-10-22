var express = require('express')
var router = express.Router()

router.get('/profile', (req, res) => {
  res.send('profile')
})

router.get('/photo', (req, res) => {
  res.send('photo')
})

router.get('/card', (req, res) => {
  res.send('card')
})

module.exports = router