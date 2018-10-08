class Ticket
{
  constructor(spot, vehicle) {
    this.spot = spot
    this.vehicle = vehicle
    this.minuteCost = 0.3
  }

  getMinuteCost() {
    return this.minuteCost
  }

  getSpot() {
    return this.spot
  }

  getVehicle() {
    return this.vehicle
  }

  calculateCost() {
    const minutesCount = (this.spot.getExitAt().getTime() - this.spot.getEntryAt().getTime()) / 60000

    return Number((minutesCount * this.minuteCost) * this.spot.size).toFixed(2)
  }

  getMinutesCount() {
    return (this.spot.getExitAt().getTime() - this.spot.getEntryAt().getTime()) / 60000
  }
}

module.exports = Ticket
