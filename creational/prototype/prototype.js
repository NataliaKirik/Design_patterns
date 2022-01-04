// позволяет копировать объекты не вдаваясь в подробности их реализации
class TeslaCar {
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    produce() {
        return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
    }
}

const prototypeCar= new TeslaCar('S',50000,'black',true)
const car_1=prototypeCar.produce()
const car_2=prototypeCar.produce()

car_2.price=70000
car_2.interior='white'

console.log(car_1);
console.log(car_2);
