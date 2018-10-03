import { Ocupation } from "./Ocupation"

export class Vehicle {
    private _plate: String;
    public get Plate(): String {
        return this._plate;
    };

    public Ocupation:Ocupation;
    
    constructor(plate: String) {
        this._plate = plate;
    }


}
