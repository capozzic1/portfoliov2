const gulp = require('gulp');
const imageResize = require('gulp-image-resize');

gulp.task('default', () => {
  gulp.src('src/assets/images/port-images/*').pipe(imageResize({width: 600, height: 300, cover: true})).pipe(gulp.dest('src/assets/images/port-images/images2'))
})
