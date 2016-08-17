'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

var DIST = 'dist/';

gulp.task('build', function () {
    return gulp
        .src('src/*.js')
        .pipe(babel())
        .pipe(gulp.dest(DIST));
});

gulp.task('default', ['build']);
