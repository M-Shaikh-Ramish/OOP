class Car {
    startEngine() {
        console.log("Engine Started");
    }

    injectFuel() {
        console.log("Fuel Injected");
    }

    igniteEngine() {
        console.log("Engine Ignited");
    }

    startCar() {
        // Hidden internal process
        this.startEngine();
        this.injectFuel();
        this.igniteEngine();

        console.log("Car is Ready to Drive");
    }
}

const myCar = new Car();
myCar.startCar();