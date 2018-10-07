const fetch = require('node-fetch')
const BASE_URL = 'http://127.0.0.1:3000'

async function getTransactions() {
    const response = await fetch(`${BASE_URL}/api/transacoes`)
    const transactions = await response.json()

    return transactions.filter(transaction => transaction.realizada).map(transaction => {
        const type = transaction.valor < 0 ? 'transference' : 'deposit'
        const { id, valor: value } = transaction

        return { id, value, type }
    })
}

getTransactions().then((response) => console.log(response));
