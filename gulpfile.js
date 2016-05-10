/**
 * Created by louis on 09/05/2016.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jsValidate = require('gulp-jsvalidate');
var concat = require('gulp-concat');

gulp.task('scripts', ['clean'], function() {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(coffee())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});

gulp.task('default', function () {
    return gulp.src('src/*')
        .pipe(jsValidate())
        .pipe(uglify({mangle: false}))
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('public/javascript/'));
});