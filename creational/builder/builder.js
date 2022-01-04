class Car {
    constructor() {
        this.autoPilot = false;
        this.parktronic = false;
        this.signaling = false;
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    addAutoPilot(autoPilot) {
        this.car.autoPilot = autoPilot;
        return this;
    }

    addParktronic(parktronic) {
        this.car.parktronic = parktronic;
        return this;
    }

    addSignaling(signaling) {
        this.car.signaling = signaling;
        return this;
    }

    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    build() {
        return this.car;
    }
}

const simpleCar = new Car()
console.log(simpleCar); //{ autoPilot: false, parktronic: false, signaling: false }

const superCar = new CarBuilder()
    .addAutoPilot(true)
    .addParktronic(true)

console.log(superCar);//{ autoPilot: true, parktronic: true, signaling: false }
console.log(simpleCar)// { autoPilot: false, parktronic: false, signaling: false }
