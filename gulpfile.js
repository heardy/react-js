var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('open');

var connectOptions = {
    root: '',
    livereload: true,
    port: 9000
};

gulp.task('connect', function () {
    connect.server(connectOptions)
});

gulp.task('html', function () {
    gulp.src("./*.html")
    .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./*.html'], ['html']);
});

gulp.task('open', function() {
    console.log(connect.options);
    open("http://localhost:" + connectOptions.port);
});

gulp.task('default', ['connect', 'open', 'watch']);
