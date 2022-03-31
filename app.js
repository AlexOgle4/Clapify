const express = require('express')
const clapify = require('./clapify')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/:greeting/:nickname', (req, res) => {
  //   res.send(`Hello ${req.params.nickname}!`)
  res.send(req.query.clapify)
})
app.get('/clapify', (req, res) => {
  //   res.send(`Hello ${req.params.nickname}!`)
  const clapified = clapify(req.query.text)
  res.send(clapified)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
