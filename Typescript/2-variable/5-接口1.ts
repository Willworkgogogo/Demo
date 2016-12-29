/**
 * Created by wangweiwei on 16/11/29.
 */
interface  define{
    lable: string;
}
function printLable(lableledObj: define) {
    console.log(lableledObj.lable);
}
let myObj = { size: 20, lable: "hello SMM" };
printLable(myObj);