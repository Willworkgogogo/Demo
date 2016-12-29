/**
 * Created by wangweiwei on 16/11/28.
 */

function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}

// hello("Typescript");
import { sayHello } from "./greet";
console.log(sayHello("MrWill"));

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello('greeting', 'SMM');