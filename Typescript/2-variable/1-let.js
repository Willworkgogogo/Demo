/**
 * Created by wangweiwei on 16/11/29.
 */
function f(input) {
    var a = 100;
    if (input) {
        var b = a + 1;
        return b;
    }
    return a;
}
console.log(f(true));
console.log(f(false));
