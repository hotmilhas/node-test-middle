class OrderRepository
{
  constructor(model) {
    this.model = model
  }

  async add(orders) {
    return this.model.insertMany(orders)
  }

  findAll() {
    return this.model.find({})
  }
}

module.exports = OrderRepository
