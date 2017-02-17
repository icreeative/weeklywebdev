let gulp = require('gulp');
let sass = require('gulp-sass');
let livereload = require('gulp-livereload');
let connect = require('gulp-connect');


gulp.task('connect', () => {
    connect.server({
        root: '',
        livereload: true
    });
});

gulp.task('sass', () => {
    gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(livereload())
        .pipe(connect.reload());
});

gulp.task('html', () => {
    gulp.src('*.html')
        .pipe(livereload())
        .pipe(connect.reload());
});

gulp.task('watch', () => {
    livereload.listen();
    gulp.watch('css/*.scss', ['sass']);
    gulp.watch('index.html', ['html']);
});

gulp.task('default', ['connect', 'watch']);