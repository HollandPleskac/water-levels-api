const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

let orovilleHt = 50
let trinityHt = 100
let orovilleHistAvg = 75
let trinityHistAvg = 150

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

app.get('/oroville_lake', (req, res) => {
  console.log("hit oroville_lake endpoint")
  res.json({ height: orovilleHt })
})

app.get('/oroville_lake_historical_avg', (req, res) => {
  res.json({height:orovilleHistAvg})
})

app.get('/trinity_lake', (req, res) => {
  res.json({ height: trinityHt })
})

app.get('/trinity_lake_historical_avg', (req, res) => {
  res.json({ height: trinityHistAvg })
})


// SET HEIGHTS

app.post('/oroville_ht',(req, res) => {
  orovilleHt+=req.body.amt
  res.json({ newHeight: orovilleHt })
})

app.post('/trinity_ht', (req, res) => {
  trinityHt += req.body.amt
  res.json({ newHeight: trinityHt })
})

app.post('/oroville_hist_avg', (req, res) => {
  orovilleHistAvg += req.body.amt
  res.json({ newHeight: orovilleHistAvg })
})

app.post('/trinity_hist_avg', (req, res) => {
  trinityHistAvg += req.body.amt
  res.json({ newHeight: trinityHistAvg })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
