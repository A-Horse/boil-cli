var fs = require('fs');
var path = require('path');

var gulp = require('gulp');

var plugins = require('gulp-load-plugins')();

var runSequence = require('run-sequence');

var pkg = require('./package.json');
var dirs = pkg['h5bp-configs'].directories;

var sass = require('gulp-sass');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');




gulp.task('sass:app', function(){
  gulp.src(['scss/**/*.scss'])
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload())
    .pipe(livereload());
});


//watch part
//
gulp.task('watch:foundation', function(){
  gulp.watch(['components/foundation/scss/**/*.scss'],
            ['sass:foundation']);
});

gulp.task('watch:bootstrap', function(){
  gulp.watch(['components/bootstrap/stylesheets/**/*.scss'],
             ['sass:bootstrap']);
});

gulp.task('watch:app', function(){
  gulp.watch(['scss/**/*.scss'],
             ['sass:app']);
});

//connect
//
gulp.task('connect', function(){
  connect.server({
    root: "app",
    host: "0.0.0.0",
    port: 8989,
    livereload: true
  });
});

gulp.task('connect:html', function() {
  gulp.src('app/**/*.html')
    .pipe(connect.reload());
});

gulp.task('connect:css', function() {
  gulp.src('app/css/**/*.css')
    .pipe(connect.reload());
});

//connection:watch
//

gulp.task('connect:watch', function() {
  gulp.watch(['app/**/*.html'], ['connect:html']);
  gulp.watch(['app/css/**/*.css'], [ 'connect:css']);
});



// ---------------------------------------------------------------------
// | My Part Task                                                |
// ---------------------------------------------------------------------

gulp.task('watch', function(){

});

gulp.task('serve',
          ['sass:app',
           'connect',
           'connect:html',
           'connect:css',
           'connect:watch',
           'watch:app'
          ]);
