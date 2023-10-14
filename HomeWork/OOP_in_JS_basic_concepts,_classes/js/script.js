class Vehicle {
  constructor(model, year, wheel, lastService) {
    this.model = model;
    this.year = year;
    this.wheel = wheel;
    this.lastService = lastService;
  }
  getAnnualService() {
    console.log(`Last service was done in ${this.lastService}`);
  }
}

class Car extends Vehicle {
  #wheels = 4;
  constructor(model, year, wheel, lastService, fuelConsumption, typeOfDrive) {
    super(model, year, wheel, lastService);
    this.fuelConsumption = fuelConsumption;
    this.typeOfDrive = typeOfDrive;
  }
  getEnginInfo() {
    console.log(
      `this ${this.model} car has last service in ${this.lastService}. Fuel consumption is ${this.fuelConsumption}`
    );
  }
}

class Bicycle extends Vehicle {
  #wheels = 2;
  constructor(model, year, wheel, lastService, handlebar, frame) {
    super(model, year, wheel, lastService);
    this.handlebar = handlebar;
    this.frame = frame;
  }
  getIntroduseInfo() {
    console.log(
      `This ${this.model} bicycle has ${this.frame} frame and include ${this.handlebar} handlebar`
    );
  }
}

const vehicle = new Vehicle("Tram", 1998, "metal", 2015);
const car1 = new Car("A7", 2021, "Michelin", 2023, "6,7", "front-wheel");
const car2 = new Car("A5", 2010, "Goodyear", 2019, "8,7", "back-wheel");
const bicycle1 = new Bicycle(
  "city",
  2016,
  "aluminium",
  2016,
  "usual",
  "aluminium"
);
const bicycle2 = new Bicycle(
  "road",
  2020,
  "carbon-plastic",
  2021,
  "spost",
  "carbon"
);

console.log(vehicle);
vehicle.getAnnualService();
console.log(car1);
car2.getEnginInfo();
console.log(bicycle1);
bicycle2.getIntroduseInfo();
