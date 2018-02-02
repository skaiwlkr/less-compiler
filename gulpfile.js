var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');

gulp.task('build', function(){
    return gulp.src('./assets/_less/all.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('default', function() {
    gulp.watch('assets/_less/**/*.*').on('change', gulp.parallel('build'));
});