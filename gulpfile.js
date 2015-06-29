var gulp = require('gulp'),
    del = require('del'),
    run = require('gulp-run'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    jsxhint = new run.Command('jsxhint'),
    browserSync = require('browser-sync'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    reactify = require('reactify'),
    package = require('./package.json'),
    reload = browserSync.reload,
    util= require('gulp-util');

/**
 * Running livereload server
 */
gulp.task('webserver', function() {

  browserSync.use({
    plugin: function () { /* noop */},
    hooks: {
        'client:js': require("fs").readFileSync("./closer.js", "utf-8") 
    }
  });

  browserSync(['public/**/*.*'],{
    port: 9001,
    open: 'local',
    server: {
     baseDir: './public'
    },
    ui: {
      port: 9002
    }
  });
})

/** JavaScript compilation */
.task('js', function() {
  return browserify(package.paths.app.main)
  .transform(reactify)
  .bundle().on('error', function(err){    
      util.log(util.colors.red(err.name),'\n\nMessage:\n',util.colors.red(err.message),'\n\nStack Trace:\n',util.colors.magenta(err.stack),'\n\n');  
      browserSync.notify("<span style='color:red;'>Syntax Error</span>");  
      this.emit('end');
    })
  .pipe(source(package.paths.public.js.main))
  .pipe(gulp.dest(package.paths.public.js.all));
})

.task('js:min', function() {
  return browserify(package.paths.app.main)
  .transform(reactify)
  .bundle().on('error', function(err){    
      util.log(util.colors.red(err.name),'\n\nMessage:\n',util.colors.red(err.message),'\n\nStack Trace:\n',util.colors.magenta(err.stack),'\n\n');
      browserSync.notify("<span style='color:red;'>Syntax Error</span>");  
      this.emit('end');
    })
  .pipe(source(package.paths.public.js.main))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest(package.paths.public.js.all));
})


/**
 * Compiling resources and serving application
 */
.task('server', ['webserver','js' ], function() {
  return gulp.watch([
    package.paths.app.all, package.paths.public.assets, package.paths.public.vendor, package.paths.public.index
  ], ['js']);
})
.task('server:minified', [ 'webserver','js:min'], function() {
  return gulp.watch([    
    package.paths.app.all, package.paths.public.assets, package.paths.public.vendor, package.paths.public.index
  ], ['js:min']);
})

.task('default',['server']);

