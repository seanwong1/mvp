const express = require('express');
const database = require('../database');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})