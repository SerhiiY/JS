class Car {
  constructor({ maxSpeed = 0, speed = 0, distance = 0, running = false, price = 0 }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.distance = distance;
    this.running = running;
    this.value = price;
  }

  static getSpecs (car) {
    let entries = Object.entries(car);
    let specs = entries.reduce((acc, el) => acc + `${el[0]}: ${el[1]}, `, "");
    return console.log(specs);
  }

  turnOn() {
    this.running = true;
    return this.running;
  }

  turnOff() {
    this.running = false;
    this.speed = 0;
    return this.running;
  }

  accelerate(spd) {
    if(spd <= this.maxSpeed && this.running){
      this.speed = spd;
      return this.speed;
    }else{
      return `You can't accelerate!`;
    }
  }

  decelerate(spd) {
    if(spd <= this.speed && spd >= 0 && this.running){
      this.speed = spd;
      return this.speed;
    }else{
      return `Current speed is lower!`
    }
  }

  drive(hours) {
    if(this.running){
      this.distance = hours * this.speed;
      return this.distance;
    }else{
      return `The car is not running!`;
    }
  }
}

const car = new Car({ maxSpeed: 100, price: 2000 });

console.log(car.accelerate(50));

car.turnOn();
car.accelerate(50);
car.drive(2);

Car.getSpecs(car);

console.log(car.value); // 2000

car.value = 4000;
console.log(car.value); // 4000
