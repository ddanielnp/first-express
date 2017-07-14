const express = require('express')
const app = express()

// all request will have to know that public folder is where we put our static files
// public refers to directory in root folder
app.use(express.static('public'))

// app.use(function (req, res, next) {
//   console.log('first middleware')
//   next()
// })
// app.use(function (req, res) {
//   console.log('second middleware')
// })

// listening for request
app.get('/', function (req, res) {
  res.sendFile(index.html)
})

app.get('/about/:name', function (req, res) {
  res.send(req.params)
})

app.get('/faq', function (req, res) {
  res.send('updated faq page')
})

app.post('/')

var port = process.env.PORT || 3000
// opens server
app.listen(port, function () {
  console.log('express is running on port ' + port)
})
