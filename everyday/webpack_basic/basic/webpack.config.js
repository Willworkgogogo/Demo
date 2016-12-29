/*
* webpack打包配置文件
* */
module.exports = {
    //如果你有多个入口js，需要打包在一个文件中，那么你可以这么写
    //entry: ['./app1.js','./app2.js'];
    entry: {
        app1: './app1.js',
        app2: './app2.js'
    },
    // entry:['./app1.js', './app2.js'],
    output: {
        path: './assets/',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {test:/\.js$/, loader:'babel'},
            {test:/\.css$/, loader:"style!css"}
        ]
    }
};