const fs = require('fs').promises;

const oroville_lake_json = require('./json_data/oroville_lake.json')
const trinity_lake_json = require('./json_data/trinity_lake.json')
const express = require('express')
const app = express()
const port = 3000

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

app.get('/oroville_lake', async (req, res) => {
  console.log("hit oroville_lake endpoint")
  res.json({ height: 50 })
})

// app.get('/oroville_lake', async (req, res) => {
//   res.json(oroville_lake_json)
// })

app.get('/trinity_lake', async (req, res) => {
  res.json(trinity_lake_json)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// historical avg calculated based on last 5 years

// lastest data retrieved using this api

// trigger calls smart contract -> 
// smart contract alls this api
// api gives json data
// smart contract (given latest month) -> compares to latest month in json
// if over -> distribute money