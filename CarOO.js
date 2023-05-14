class Vehicle {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year= year;
    }
    honk() {
        return "BEEP"
    }
    toString () {
        return `The vehichle is a ${this.make}  ${this.model} from  ${this.year} `
    }
}


 




class Car extends Vehicle {
constructor (make, model, year) {
    super (make, model, year);
this.numWheels = 4;
    }
}


class Motorcucle extends Vehicle {
    constructor(make, model, year) {
        super (make, model, year);
        this.numWheels = 2;
    }
    revEngine () {
        return "VROOOOM"
    }


}


class Garage {
    constructor (capacity) {
        this.vehichles = []
        this.capacity = capacity
    }
    add (newVehicle){
    if (! (newVehicle instanceof Vehicle)){
        return "Only vehichles are allowed in here!"
    }
    if (! (newVehicle instanceof Vehicle)){
        return "Sorry were full!"
    }
    if (! (newVehicle instanceof Vehicle)){
        return "vehichle added!"
    }
}


}

