const express = require('express');
const database = require('../database');

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const port = 3000;

app.get('/patterns', (req, res) => {
  database.get(req.query.pattern).exec((err, result) => {
    if (err) {
      console.log(err);
      // res.status(404);
    } else {
      res.send(result);
    }
  })
})

// app.post('/patterns', (req, res) => {
//   database.get(req.body.pattern)
//     .then((response) => {

//     })
//   //res.send('POST request to the homepage')
// })

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})