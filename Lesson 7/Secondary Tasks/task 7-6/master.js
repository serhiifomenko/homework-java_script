// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car


function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };

    this.info = function () {
        console.log(`model - ${this.model}`);
        console.log(`manufacturer - ${this.manufacturer}`);
        console.log(`year - ${this.year}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`engineVolume - ${this.engineVolume}`);
        console.log(`driver -`, this.driver);
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
    };

    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

const car = new Car("Camry", "Toyota", 2020, 200, 2.5);

car.drive();
car.info();

car.increaseMaxSpeed(30);
car.changeYear(2022);

car.addDriver({
    name: "Alex",
    age: 25,
    experience: 5
});

car.drive();
car.info();

