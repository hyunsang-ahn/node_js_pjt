const express = require('express')

const app = express()

app.listen(8080, function () {
  console.log('hello')
})

app.get('/', function (req, res) {
    console.log('__dirname==================',__dirname)
    res.sendFile(__dirname + '/index.html')
})
