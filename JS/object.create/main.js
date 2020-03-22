const Car = {
    drive() {
        console.log(`${this.name} drive`);
    },
    stop() {
        console.log(`${this.name} stop`);
    },
    refuel() {
        console.log(`${this.name} refuels`);
    }
}


const car1 = Object.create(Car);
car1.name = 'Bmw 3';
car1.drive();
const car2 = Object.create(Car, {
    name: {
        value: "Audi 80",
        writable: false,
    },
    km: {
        value: 1000000,
        configurable: true,
    },
});

console.log(car1);
console.log(car2);