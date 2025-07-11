class Car {
  constructor(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
  }

  drive() {
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
  }

  info() {
 
    for (const key in this) {
      if (typeof this[key] !== "function") {
        console.log(`${key} – ${this[key]}`);
      }
    }
  }

  increaseMaxSpeed(newSpeed) {
    this.maxSpeed += newSpeed;
  }

  changeYear(newValue) {
    this.year = newValue;
  }

  addDriver(driver) {
    this.driver = driver;
  }
}



const myCar = new Car('Class S', 'Mersedes', 2018, 240, 75);

myCar.drive(); 


myCar.info();


myCar.increaseMaxSpeed(30);
myCar.changeYear(2021);
myCar.addDriver({ name: 'Микита', license: 'B12345968' });

myCar.info();

console.log(myCar.driver);

