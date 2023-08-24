const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")
const dbConnect = require('./db.js');


dbConnect();
// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())



app.use('/', Routes);

console.log('App js running');
app.listen(5000, () => {
  console.log('App Listening on port 5000');
});