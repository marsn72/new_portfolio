const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', ()=>{
  gulp.src('./src/**/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./dist'))
});

gulp.task('watch', ()=>{
  gulp.watch('./src/**/*.pug', gulp.series('pug'))
});