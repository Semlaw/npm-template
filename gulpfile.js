const gulp = require('gulp')
const webpack = require('webpack-stream')
const configs = require('./webpack.config')
const del = require('del')

gulp.task('clean', function () {
  return del(['./dist/'])
})

gulp.task('build:umd:dev', function () {
  return gulp
    .src('src/index.js')
    .pipe(webpack(configs.umdConfigDev))
    .pipe(gulp.dest('./dist'))
})

gulp.task('build:umd:pro', function () {
  return gulp
    .src('src/index.js')
    .pipe(webpack(configs.umdConfigPro))
    .pipe(gulp.dest('./dist'))
})

gulp.task(
  'build:dev',
  gulp.series(['build:umd:dev'])
)

gulp.task(
  'build:pro',
  gulp.series(['build:umd:pro'])
)

gulp.task(
  'build',
  gulp.series(['build:umd:pro'])
)

gulp.task(
  'watch:after-build',
  () => gulp.watch('src', gulp.series(['build:umd:dev']))
)

gulp.task('watch', gulp.series(['clean', 'build:dev', 'watch:after-build']))

gulp.task('default', gulp.series(['clean', 'build:pro']))
