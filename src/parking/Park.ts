import { Vehicle } from "./Vehicle";
import { ParkingSpace } from "./ParkingSpace"
import { Ocupation } from "./Ocupation";

export class Park {

    private _parkingSpaces: ParkingSpace[] = [];
    private _historyOcupation: Ocupation[] = [];
    private _capacity: number = 100;
    private _occupacity: number = 0;

    public get ParkingSpaces(): ParkingSpace[] {
        return this._parkingSpaces;
    }

    public get Capacity(): number {
        return this._capacity;
    }

    public get Occupacity(): number {
        return this._occupacity;
    }

    constructor() {
        this._parkingSpaces = new Array<ParkingSpace>(this._capacity).map(x => new ParkingSpace())
    }

    Enter(vehicle: Vehicle) {

        if (this._occupacity < this._capacity ) {

            let parkingSpace = this._parkingSpaces.filter(x => !x.Occupied)[0];
            
            parkingSpace.Occupy(vehicle);
            
            this._occupacity++;

        }
        else{
            throw new Error("No parking space available.")
        }

    }

    Exit(vehicle: Vehicle) {

        let parkingSpace = this._parkingSpaces.filter(x => x.Vehicle.Plate == vehicle.Plate)[0];
        
        this.setHistoryOcupation(parkingSpace);

        parkingSpace.Vacate()

        this._occupacity--;

    }

    private setHistoryOcupation(parkingSpace: ParkingSpace) {
        parkingSpace.Vehicle.Ocupation.finalize();
        this._historyOcupation.push(parkingSpace.Vehicle.Ocupation);
    }

}