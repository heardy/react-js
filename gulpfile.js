var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('open');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var gutil = require('gutil');

var connectOptions = {
    root: '',
    livereload: true,
    port: 9000
};

gulp.task('connect', function () {
    connect.server(connectOptions)
});

gulp.task('html', function () {
    gulp.src('**/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['**/src/*.html', '**/src/**/*.*'], ['default', 'html']);
});

// gulp.task('open', function() {
//     open("http://localhost:" + connectOptions.port);
// });

gulp.task('browserify', function() {
    gulp.src('flux/src/js/main.js')
      .pipe(browserify({transform: 'reactify'})).on('error', gutil.log)
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/flux/js'));
});

gulp.task('copy', function() {
    gulp.src('flux/src/index.html')
      .pipe(gulp.dest('dist/flux'));
});

gulp.task('server', ['connect',/* 'open',*/ 'watch']);

gulp.task('default',['browserify', 'copy'], function () {
    console.log(11);
});
