// let input = [1, 2];
// let [first, second] = input;
// [first, second] = [second, first];
// console.log(first)
// console.log('\n' + second);

// let [first, ...rest] = [1,2,3,4];
// console.log(first)
// console.log(rest)

// let first = [1,2,3];
// let second = [4,5,6];
// let third = [...first, ...second];
// console.log(first)
// console.log(third)

// function sum(x:string, ...rest:Array<string>):any {
//     return 

// }

// class benz {
//     engine1: string;
//     constructor(engineName: string) {
//         this.engine1 = engineName;
//     }
//     drive(distance: number = 0) {
//         console.log(`使用引擎名：${this.engine1}, 行驶距离${distance} .`)
//     }
// }
// let mybenz = new benz("wang");
// mybenz.drive(1000)


class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter.greet())