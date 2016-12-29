/**
 * Created by wangweiwei on 16/11/29.
 */
function f(input: boolean) {
    let a = 100;

    if (input) {
        let b = a + 1;
        return b;
    }

    return a;
}
console.log(f(true));
console.log(f(false));