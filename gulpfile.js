var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
    browserSync.init({
        server: {
            baseDir: './app'
        }
    });

    gulp.watch('./app/styles/*.css');
    gulp.watch('./app/index.html').on('change', browserSync.reload);
});