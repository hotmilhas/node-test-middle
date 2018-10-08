const Ticket = require('./Ticket')

class Spot
{
  constructor(size, column, row, level) {
    this.size = size
    this.column = column
    this.row = row
    this.level = level
    this.vehicle = null
  }

  getSize() {
    return this.size
  }

  getColumn() {
    return this.column
  }

  getRow() {
    return this.row
  }

  getLevel() {
    return this.level
  }

  getFormattedColumnRowLevel() {
    return `${this.column}${this.row} no andar n. ${this.level}`
  }

  getEntryAt() {
    return this.entryAt
  }

  getExitAt() {
    return this.exitAt
  }

  getVehicle() {
    return this.vehicle
  }

  park(vehicle, entryAt) {
    this.vehicle = vehicle
    this.entryAt = entryAt

    return true
  }

  unpark(vehicle, exitAt) {
    this.vehicle = null
    this.exitAt = exitAt

    return new Ticket(this, vehicle)
  }

  isAvailable() {
    return null === this.vehicle
  }

  vehicleIsParked(vehicle) {
    return this.vehicle === vehicle
  }

  vehicleCanPark(vehicle) {
    return vehicle.spotsNeeded <= this.size
  }
}

module.exports = Spot
