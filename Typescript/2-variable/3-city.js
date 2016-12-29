/**
 * Created by wangweiwei on 16/11/29.
 */
function city() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity;
}
console.log(city()());
