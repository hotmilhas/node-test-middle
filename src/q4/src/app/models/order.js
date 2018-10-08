const database = require('../../database')
const autoIncrement = require('mongoose-auto-increment')

autoIncrement.initialize(database.connection)

const orderSchema = new database.Schema(
  {
    totalBRL: { type: Number, required: true },
    totalUSD: { type: Number, required: true }
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
    versionKey: false
  }
)

orderSchema.plugin(autoIncrement.plugin, {
  model: 'Order',
  field: '_id',
  startAt: 1
})

const Order = database.model('Order', orderSchema)

module.exports = Order


