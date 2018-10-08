class Receipt
{
  constructor(ticket) {
    this.ticket = ticket
  }

  printRawText() {
    return `O veículo com a placa ${this.ticket.getVehicle().getPlateNumber()} ficou ${this.ticket.getMinutesCount()} minutos
Estacionado na vaga ${this.ticket.getSpot().getFormattedColumnRowLevel()}
O valor total ficou em R$ ${this.ticket.calculateCost()} reais
O valor do minuto é R$ ${this.ticket.getMinuteCost()}`
  }
}

module.exports = Receipt
