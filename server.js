const express = require('express')
const app = express()
const notes = require('./note.js')
const db = require('./db.js')

const bodyParser = require('body-parser');
app.use(bodyParser.json());





app.get('/', function (req, res) {
  res.send('Hello World')
})



const personRoute = require('./routes/personRoute.js');
const menuRoute = require('./routes/menuRoute.js');





app.use('/person',personRoute);
app.use('/menu',menuRoute);



app.listen(3000)
