const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

let donPedroHt = 1115
let modestoHt = 204
let donPedroHistAvg = 1350
let modestoHistAvg = 604

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

// GET HEIGHTS

app.get('/don_pedro_reservoir', (req, res) => {
  console.log("hit don pedro endpoint")
  res.json({ height: donPedroHt })
})

app.get('/don_pedro_historical_avg', (req, res) => {
  res.json({height:donPedroHistAvg})
})

app.get('/modesto_reservoir', (req, res) => {
  res.json({ height: modestoHt })
})

app.get('/modesto_reservoir_historical_avg', (req, res) => {
  res.json({ height: modestoHistAvg })
})


// SET HEIGHTS

app.post('/don_pedro_ht',(req, res) => {
  donPedroHt+=req.body.amt
  res.json({ newHeight: donPedroHt })
})

app.post('/modesto_ht', (req, res) => {
  modestoHt += req.body.amt
  res.json({ newHeight: modestoHt })
})

app.post('/don_pedro_hist_avg', (req, res) => {
  donPedroHistAvg += req.body.amt
  res.json({ newHeight: donPedroHistAvg })
})

app.post('/modesto_hist_avg', (req, res) => {
  modestoHistAvg += req.body.amt
  res.json({ newHeight: modestoHistAvg })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
