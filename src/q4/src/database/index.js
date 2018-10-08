const mongoose = require('mongoose')

const server = `mongodb:${process.env.DATABASE_PORT}`
const database = process.env.DATABASE_NAME

mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true })
mongoose.Promise = global.Promise

module.exports = mongoose
