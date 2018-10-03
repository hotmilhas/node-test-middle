const orderRepository = require("../repositories/order-repository")
const dolarValueService = require("../../price/services/price-service")

class OrderService {

    async listOrders() {
        return await orderRepository.listOrders()
    }

    async createOrders(items) {
        let price = await dolarValueService.getLast()
        let orders = items.map((x) => {
            return { totalBRL: x, totalUSD: x * price.usd, createdAt: new Date() }
        })

        await orderRepository.insertOrders(orders)
        return orders;
    }
}

module.exports = new OrderService()