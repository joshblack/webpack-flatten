var assign = require('object-assign');
var gulp = require('gulp');
var babel = require('gulp-babel');
var flatten = require('gulp-flatten');
var del = require('del');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var gutil = require('gulp-util');

var babelPluginDEV = require('./scripts/babel/dev-expression');
var babelDefaultOptions = require('./scripts/babel/default-options');
var gulpModuleMap = require('./scripts/gulp/module-map.js');

var paths = {
  src: [
    'src/**/*.js',
    '!src/**/__tests__/**/*.js',
    '!src/**/__mocks/**/*.js'
  ],
  lib: 'lib'
};

var babelOpts = assign({}, babelDefaultOptions, {
  plugins: babelDefaultOptions.plugins.concat([
    babelPluginDEV
  ])
});

var moduleMapOpts = {
  moduleMapFile: './module-map.json',
  prefix: 'webpack-flatten/lib/'
};

gulp.task('clean', function (cb) {
  del([paths.lib], cb);
});

gulp.task('lib', function () {
  return gulp
    .src(paths.src)
    .pipe(gulpModuleMap(moduleMapOpts))
    .pipe(babel(babelOpts))
    .pipe(flatten())
    .pipe(gulp.dest(paths.lib));
});

gulp.task('webpack', function (cb) {
  var config = {};

  webpack(config, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString());
    cb();
  });
});

gulp.task('build', function (cb) {
  runSequence('clean', 'lib', 'webpack', cb);
});

gulp.task('default', ['build']);
