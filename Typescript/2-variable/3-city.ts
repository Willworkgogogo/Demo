/**
 * Created by wangweiwei on 16/11/29.
 */
function city() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function () {
            return city;
        }
    }

    return getCity;
}

console.log(city()());