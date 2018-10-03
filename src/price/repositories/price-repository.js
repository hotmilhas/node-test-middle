const redis = require("redis")
let cache = {}

class DollarValueCacheRepository {

    constructor() {

        cache = redis.createClient(6379, "172.18.0.1");
        cache.on('connect', () => {
            console.log('REDIS READY');
        });
        cache.on('error', (e) => {
            console.log('REDIS ERROR', e);
        });

    }

    getLast(key) {

        return new Promise(function (resolve, reject) {
            cache.get(key, function (error, object) {
                if (error) {
                    reject(error)
                }
                resolve(JSON.parse(object))
            });
        })

    }

    insert(dolarValue, time) {

        const timeInSecond = 'EX';
        cache.set("dolarValue", JSON.stringify(dolarValue), timeInSecond, time)

    }
}

module.exports = new DollarValueCacheRepository()