const MongoClient = require('mongodb').MongoClient;

let database = {}

class OrderRepository {

    constructor() {

        var url = "mongodb://172.18.0.1:27017/order";
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            database = db.db("order")
        });
        
    }

    async listOrders() {
        return await database.collection("orders").find({}).toArray()
    }

    async insertOrders(orders) {
        return await database.collection("orders").insertMany(orders);
    }

}

module.exports = new OrderRepository()