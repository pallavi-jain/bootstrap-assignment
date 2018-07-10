const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

gulp.task('sass', function () {
    // return gulp.src('/styles/scss/base.scss')
    //   .pipe(sass.sync().on('error', sass.logError))
    //   .pipe(gulp.dest('css'));
    return gulp.src('app/styles/scss/styles.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/styles/css'))
        .pipe(browserSync.reload({
            stream: true
          }))
});


gulp.task('watch',['browserSync', 'sass'], function(){
    gulp.watch('app/styles/scss/**/*.scss', ['sass']); 
    // Other watchers
    gulp.watch('app/*.html', browserSync.reload); 
  });


gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
  })