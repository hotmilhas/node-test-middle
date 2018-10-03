const orderService = require("../services/order-service")
const httpStatus = require('http-status-codes');

class OrderController {

    async listOrders(req, res) {
        try {

            let orders = await orderService.listOrders()
            res.json(orders);

        } catch (error) {

            res.status(httpStatus.INTERNAL_SERVER_ERROR)
            res.json(error);

        }
    }

    async insertOrders(req, res) {
        let items = req.body.items;

        try {

            let orders = await orderService.createOrders(items)
            res.json(orders);

        } catch (error) {

            res.status(httpStatus.INTERNAL_SERVER_ERROR)
            res.json(error);

        }
    }
}

module.exports = new OrderController()