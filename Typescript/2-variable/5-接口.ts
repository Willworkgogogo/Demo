/**
 * Created by wangweiwei on 16/11/29.
 */
function printLable(labelledObj: { lable: string }) {
    console.log(labelledObj.lable);
}
let myObj = { size: 20, lable: "hello world" };
printLable(myObj);