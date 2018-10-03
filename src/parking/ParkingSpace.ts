
import { Vehicle } from "./Vehicle";
import { Ocupation } from "./Ocupation";

export class ParkingSpace {

    private _occupied: Boolean;
    private _vehicle: Vehicle;
    private _ocupation: Ocupation;

    public get Occupied(): Boolean {
        return this._occupied;
    }

    public get Vehicle(): Vehicle {
        return this._vehicle;
    }

    constructor() {
        this._occupied = false;
    }

    Occupy(vehicle: Vehicle) {
        this._occupied = true
        this._vehicle = vehicle
        this._ocupation = new Ocupation(this)
    
    }

    Vacate() {
        this._occupied = false;
        this._vehicle = null;
        this._ocupation = null;
    }

}
