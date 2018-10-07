const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const helmet = require('helmet')
const cors = require('cors')

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

require('./app/controllers/index')(app);

app.listen(process.env.PORT)

module.exports = app
