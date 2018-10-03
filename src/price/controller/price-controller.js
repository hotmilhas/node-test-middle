const httpStatus = require('http-status-codes');

const dollarValueCacheService = require("../services/price-service")

class DollarValueController {

    async brlUsd(req, res) {
        try {

            let dolarValue = await dollarValueCacheService.getLast()
            res.json(dolarValue);

        } catch (error) {

            res.status(httpStatus.INTERNAL_SERVER_ERROR)
            res.json(error);

        }
    }
}

module.exports = new DollarValueController();