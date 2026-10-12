const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {
  res.sendStatus(201);
})

app.put('/login', (req, res) => {
  res.sendStatus(202)
})

app.patch('/update', (req, res) => {
  res.sendStatus(203)
})

app.delete('/delete', (req, res) => {
  res.sendStatus(204)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})