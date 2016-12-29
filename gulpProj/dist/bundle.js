(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function sayHello(name) {
    return "Hello from " + name;
}
exports.sayHello = sayHello;

},{}],2:[function(require,module,exports){
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
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
showHello('greeting', 'SMM');

},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQSxrQkFBeUIsSUFBWTtJQUNqQyxNQUFNLENBQUMsZ0JBQWMsSUFBTSxDQUFDO0FBQ2hDLENBQUM7QUFGZSxnQkFBUSxXQUV2QixDQUFBOzs7QUNGRDs7R0FFRzs7QUFFSCxlQUFlLFFBQWdCO0lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWMsUUFBVSxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVELHVCQUF1QjtBQUN2QixzQkFBeUIsU0FBUyxDQUFDLENBQUE7QUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFFaEMsbUJBQW1CLE9BQWUsRUFBRSxJQUFZO0lBQzVDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBmdW5jdGlvbiBzYXlIZWxsbyhuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYEhlbGxvIGZyb20gJHtuYW1lfWA7XG59XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSB3YW5nd2Vpd2VpIG9uIDE2LzExLzI4LlxuICovXG5cbmZ1bmN0aW9uIGhlbGxvKGNvbXBpbGVyOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhgSGVsbG8gZnJvbSAke2NvbXBpbGVyfWApO1xufVxuXG4vLyBoZWxsbyhcIlR5cGVzY3JpcHRcIik7XG5pbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gXCIuL2dyZWV0XCI7XG5jb25zb2xlLmxvZyhzYXlIZWxsbyhcIk1yV2lsbFwiKSk7XG5cbmZ1bmN0aW9uIHNob3dIZWxsbyhkaXZOYW1lOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdk5hbWUpO1xuICAgIGVsdC5pbm5lclRleHQgPSBzYXlIZWxsbyhuYW1lKTtcbn1cblxuc2hvd0hlbGxvKCdncmVldGluZycsICdTTU0nKSJdfQ==
