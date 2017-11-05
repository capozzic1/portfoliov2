var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminZopfli = require('imagemin-zopfli');
var imageminMozjpeg = require('imagemin-mozjpeg'); //need to run 'brew install libpng'
var imageminGiflossy = require('imagemin-giflossy');
var gulp = require('gulp');
//compress all images
gulp.task('imagemin', function() {
  return gulp.src(['src/assets/**/*.{gif,png,jpg}']).pipe(imagemin([
    //png
    imageminPngquant({
      speed: 1, quality: 98 //lossy settings
    }),
    imageminZopfli({more: true}),
    //gif
    // imagemin.gifsicle({
    //     interlaced: true,
    //     optimizationLevel: 3
    // }),
    //gif very light lossy, use only one of gifsicle or Giflossy
    imageminGiflossy({
      optimizationLevel: 3, optimize: 3, //keep-empty: Preserve empty transparent frames
      lossy: 2
    }),
    //svg
    imagemin.svgo({
      plugins: [
        {
          removeViewBox: false
        }
      ]
    }),
    //jpg lossless
    imagemin.jpegtran({progressive: true}),
    //jpg very light lossy, use vs jpegtran
    imageminMozjpeg({quality: 90})
  ])).pipe(gulp.dest('src/assets/compressed'));
});
