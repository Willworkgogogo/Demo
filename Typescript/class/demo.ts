// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// let greeter = new Greeter("world");
// console.log(greeter.greet())

// 继承
// class Animal{
//     name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
//     move(distance: number = 0) {
//         console.log(`${this.name} moved ${distance}`)
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) {
//         super(name)
//     }
//     move(distance = 5) {
//         console.log('Snake......')
//         super.move(distance);
//     }
// }

// class Horse extends Animal {
//     constructor(name: string) {
//         super(name)
//     }
//     move(distance = 45) {
//         console.log('Horse......')
//         super.move(distance);
//     }
// }

// let sam = new Snake('Go');
// let tom = new Horse("Python");

// sam.move();
// tom.move();


// 静态属性
// class Grid {
//     static origin = {x: 0, y: 0};
//     constructor (public scale: number) { }
//     calculateDistanceFromOrigin(point: {x: number, y: number}) {
//         let xDist = point.x - Grid.origin.x;
//         let yDist = point.y - Grid.origin.y;
//     }
// }

// interface fullName {
//     age: number;
//     firstname: string;
//     secondname?: string;
// }

// function printname(name: fullName) {
//     console.log(name.firstname + ' ' + name.secondname)
// }

// let obj = {age: 10, firstname: 'will', secondname: 'wei'};
// printname(obj)

// 函数类型接口
interface encrypt {
    (val: string, salt: string): string;
}
let md5: encrypt;
md5 = function(val:string, salt: string):string {
    return
}
