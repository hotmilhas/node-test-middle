const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const Order = require('../models/order')
const OrderRepository = require('../repositories/order')
const repository = new OrderRepository(Order)

router.post('/', async (req, res) => {
  const { items } = req.body

  if (typeof items === 'undefined') {
    res.status(500)
    return res.send({ error: true, message: 'Items were not informed' })
  }

  if (items.length === 0) {
    res.status(500)
    return res.send({ error: true, message: 'Items are empty' })
  }
  const quotationResponse = await fetch(`${process.env.BASE_URL}:${process.env.PORT}/api/brl-usd`)
  const data = await quotationResponse.json()
  const { usd: usdCotation } = data

  const orders = items.map(item => {
    const orderData = {
      totalBRL: Number(item).toFixed(2),
      totalUSD: Number(item * usdCotation).toFixed(2),
    }

    return orderData
  })

  let response = []

  try {
    response = await repository.add(orders)
  } catch (e) {
    response = e
    res.status(422)
  }

  res.send(response)
})

router.get('/', async (req, res) => {
    const orders = await repository.findAll()

    res.send(orders)
})

module.exports = app => app.use('/api/orders', router)
