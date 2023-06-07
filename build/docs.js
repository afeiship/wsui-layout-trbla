'use strict';

var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'del'],
});
//styles
gulp.task('docs', function () {
  return gulp
    .src('docs/style.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest('docs'));
});
