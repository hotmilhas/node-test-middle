const apicache = require('apicache')

const redis = require('redis')

const client = redis.createClient({
  port: process.env.CACHE_PORT,
  host: 'redis'
})

module.exports = apicache.options({ redisClient: client }).middleware
