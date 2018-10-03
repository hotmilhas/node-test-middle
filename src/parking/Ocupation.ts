import * as moment  from "moment";
import { ParkingSpace } from "./ParkingSpace"

export class Ocupation {
    private _arrivalDate: moment.Moment;
    private _exitDate: moment.Moment;
    public _parkingSpace: ParkingSpace;

    public get ParkingSpace(): ParkingSpace {
        return this._parkingSpace;
    }

    constructor(parkingSpace: ParkingSpace) {
        this._parkingSpace = parkingSpace;
        this._arrivalDate = moment()
    }

    public finalize() {
        this._exitDate = moment()
    }

}
