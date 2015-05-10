var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var del = require('del');

gulp.task('clean:dist', function (cb) {
  del(['dist/**/*'], cb);
});

gulp.task('minify', ['clean:dist'], function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename({
       extname: '.min.js'
     }))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy:src', ['clean:dist'], function() {
  return gulp.src('src/*.js')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['minify', 'copy:src']);
