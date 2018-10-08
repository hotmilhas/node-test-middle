const Vehicle = require('./Vehicle')
const Spot = require('./Spot')
const Ticket = require('./Ticket')
const Receipt = require('./Receipt')

const spot = new Spot(1, 'A', 2, 2)
const vehicle = new Vehicle('HOT-2020', 1)

vehicle.park(spot, new Date(2018, 10, 01, 8, 20, 20))

const ticket = vehicle.unpark(spot, new Date(2018, 10, 01, 8, 50, 20))
const receipt = new Receipt(ticket)

console.log(receipt.printRawText())
