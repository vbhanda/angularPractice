var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var _ = require('lodash');
var port = 8000,
    open = require('gulp-open');

gulp.task('open', function() {
    return gulp.src('app/app.js')
        .pipe(open({
            uri: 'http://localhost:' + port
        }));
});

gulp.task('reload', function() {
    return gulp.src('tmp/**/*.*')
        .pipe(plugins.connect.reload());
});


gulp.task('watch', function() {
    gulp.watch('app/**/*.*', ['reload']);
});

gulp.task('default', ['open', 'watch']);