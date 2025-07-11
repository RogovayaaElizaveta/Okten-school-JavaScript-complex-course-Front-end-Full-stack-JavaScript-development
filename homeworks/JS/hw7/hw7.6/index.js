function Car(model, manufacturer, year, maxSpeed, engineVolume) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.engineVolume = engineVolume;

  this.drive = function() {
    console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
  };

  this.info = function() {
  
    for (const key in this) {
      if (typeof this[key] !== "function") {
        console.log(`${key} – ${this[key]}`);
      }
    }
  };

  this.increaseMaxSpeed = function(newSpeed) {
    this.maxSpeed += newSpeed;
  };

  this.changeYear = function(newValue) {
    this.year = newValue;
  };

  this.addDriver = function(driver) {
    this.driver = driver;
  };
}



const myCar = new Car('Model GLE', 'Mersedes', 2019, 250, 100);
myCar.drive(); 
myCar.info();


myCar.increaseMaxSpeed(20);
myCar.changeYear(2022);
myCar.addDriver({ name: 'Коля', age: 21 });

myCar.info();


console.log(myCar.driver);

