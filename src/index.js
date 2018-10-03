const express = require('express')
const bodyParser = require('body-parser')

const dollarValueController = require("./price/controller/price-controller")
const orderController = require("./orders/controllers/order-controller")

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


router.get('/api/brl-usd/', dollarValueController.brlUsd);
router.get('/api/orders/', orderController.listOrders);
router.post('/api/orders/', orderController.insertOrders);


app.use('/', router);

module.exports = app;
