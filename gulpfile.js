var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    umd = require("gulp-umd"),
    babel = require('gulp-babel');

gulp.task('default', function () {
    return gulp.src([
            './src/jedi-validate.es6',
            './src/methods.js',
            './src/**/*'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('jedi-validate.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        // .pipe(umd())
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*', function (event) {
        gulp.run('default');
    });
});
