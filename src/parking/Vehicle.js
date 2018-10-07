class Vehicle
{
  constructor(plateNumber, spotsNeeded) {
    this.plateNumber = plateNumber
    this.spotsNeeded = spotsNeeded
  }

  getPlateNumber() {
    return this.plateNumber
  }

  park(spot, entryAt) {
    if (! spot.isAvailable()) {
      throw new Error("This spot is not available")
    }

    if (! spot.vehicleCanPark(this)) {
      throw new Error("This vehicle can't park in this spot")
    }
    spot.park(this, entryAt)

    return true
  }

  unpark(spot, exitAt) {
    if (! spot.vehicleIsParked(this)) {
      throw new Error('This vehicle is not parked in this spot')
    }
    return spot.unpark(this, exitAt)
  }
}

module.exports = Vehicle
