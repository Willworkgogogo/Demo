/**
 * Created by wangweiwei on 16/11/28.
 */
"use strict";
function hello(compiler) {
    console.log("Hello from " + compiler);
}
// hello("Typescript");
var greet_1 = require("./greet");
console.log(greet_1.sayHello("MrWill"));
