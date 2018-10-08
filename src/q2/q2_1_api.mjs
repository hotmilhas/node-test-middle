import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text({ defaultCharset: 'utf-8' }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000;

app.get('/api/transacoes', (req, res) => {
    res.send([
        {
            id: 1,
            valor: 20.10,
            realizada: true
        },
        {
            id: 2,
            valor: -30.00,
            realizada: true
        },
        {
            id: 3,
            valor: 65.90,
            realizada: true
        },
        {
            id: 4,
            valor: 15.78,
            realizada: true
        },
        {
            id: 5,
            valor: -20.50,
            realizada: true
        }
    ])
})

app.listen(PORT)
