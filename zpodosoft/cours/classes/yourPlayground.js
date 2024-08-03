
class Car {
    
    constructor(name, color, topSpeed) {
        this._currentSpeed = 0;
        this._name = name;
        this._color = color;
        this._topSpeed = topSpeed;
    }


    get name() {
        return this._name;
    }

    get color() {
        return this._color;
    }

    get topSpeed() {
        return this._topSpeed;
    }

    get currentSpeed() {
        return this._currentSpeed;
    }

    zeroToSixty(){
        setTimeout(() => {
            console.log('pHEW! that was fast!')
            this._currentSpeed = 60;
            console.log(this._currentSpeed)
        }, 2000)
    }
    
    drive(speed=10){
        console.log('just drove 1 sec')
        this._currentSpeed += speed;
        console.log(`${this._currentSpeed}`)
    }
    
    brake(){
        console.log('hit the break')
        this._currentSpeed -= 10;
        console.log(this._currentSpeed)
    }
    
    stop(){
        console.log('stopping ferrari')
        this._currentSpeed = 0;
        console.log(this._currentSpeed)
    }
}

const ferrari = new Car('ferrari', 'red', 77);

// console.log(ferrari);
// console.log(ferrari.name)
// console.log(ferrari.color)
// console.log(ferrari.topSpeed)
// console.log(ferrari.currentSpeed)
// ferrari.drive()
// ferrari.brake()
// console.log(ferrari.currentSpeed)
//
// ferrari.drive()
// ferrari.brake()
// console.log(ferrari.currentSpeed)
//
// ferrari.drive()
// ferrari.brake()
// console.log(ferrari.currentSpeed)

// ferrari.zeroToSixty();
// console.log(ferrari.currentSpeed)
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.brake()
// ferrari.stop()

// let porsche = new Car('porsche', 'yellow', 350)
//
// const nums = [1,2,3,4,5]
// nums.forEach(_ => porsche.drive())
// porsche.zeroToSixty()
// porsche.stop()
// console.log(porsche.currentSpeed)

console.log([1,2,3].join('🍓'));





















