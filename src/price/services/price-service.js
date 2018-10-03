
const request = require("../utils/request")
const dollarValueCacheRepository = require("../repositories/price-repository")
const urlApi = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?"; 

class DollarValueService {

    async getLast() {
        let dolarValue = await dollarValueCacheRepository.getLast("dolarValue")

        if (!dolarValue) {
            let url = urlApi + "@dataCotacao='07-20-2018'&$top=100&$format=json"

            let data = await request.get(url)
            dolarValue = {
                brl: 1,
                usd: data.value[0].cotacaoCompra,
            }

            let timeCache = 14400
            dollarValueCacheRepository.insert(dolarValue, timeCache)
        }

        return dolarValue;

    }
}

module.exports = new DollarValueService()