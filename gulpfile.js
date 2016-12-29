var gulp = require("gulp");
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('compress', function () {
    pump([
        gulp.src('./Map/project/map.smm.cn/src/map/static/js/main.js'),
        uglify(),
        gulp.dest('dist')
    ])
});