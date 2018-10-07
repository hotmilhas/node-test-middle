const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const cache = require('../middlewares/cache')

router.get('/', cache('4 hours'), async (req, res) => {
  const quotationDate = '07-20-2018'
  const url =`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${quotationDate}%27&$top=100&$format=json`
  const response = await fetch(url)
  const data = await response.json()
  const [ quotation ] = data.value

  res.send({
      "brl": 1,
      "usd": (1 / quotation.cotacaoCompra)
   })
})

module.exports = app => app.use('/api/brl-usd', router)
