const express = require('express')
const clapify = require('./clapify')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/clapify', (req, res) => {
  //   res.send(`Hello ${req.params.nickname}!`)
  const emojis = Array.isArray(req.query.emoji)
    ? req.query.emoji
    : [req.query.emoji]
  const clapified = clapify(req.query.text, emojis)

  console.log(clapify)
  console.log(clapified)
  res.send({
    result: clapified,
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
