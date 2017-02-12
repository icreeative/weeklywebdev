// Sass configuration
let gulp = require('gulp');
let sass = require('gulp-sass');
let minify = require('gulp-minify-css');
let connect = require('gulp-connect');
let browserify = require('browserify');

gulp.task('sass', () => {
    gulp.src('./css/*.scss')
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest( (f) => {
            return f.base;
        }))
});

gulp.task('connect', () => {
  connect.server({
    root: __dirname+'/',
    port: process.env.PORT || 8080,
    livereload: true
  });
});

gulp.task('reload-html', () => {
    console.log(gulp.src('./index.html'))
    return gulp.src('./index.html').pipe(connect.reload());
});
gulp.task('reload-css', ['sass'], () => {
    return gulp.src('./css/*.css').pipe(connect.reload());
});

gulp.task('watch', () => {
    gulp.watch(['./css/*.scss'], ['reload-css','reload-html']);
    gulp.watch(['./index.html'], ['reload-html'])
})

gulp.task('serve', ['watch', 'connect']);

gulp.task('default', ['serve']);