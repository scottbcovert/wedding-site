var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    livereload = require('gulp-livereload'),
    run = require('gulp-run');

gulp.task('default', function(callback) {
	if (process.env.NODE_ENV === 'dev'){
    runSequence(['watch','serve']);
  }
  else {
    runSequence(['serve']);
  }
  return callback;
});

gulp.task('watch', function(callback) {
  var onChange = function (event) {
    console.log('File '+event.path+' has been '+event.type);
    livereload.reload();
  };
  livereload.listen();
  gulp.watch(['./app/**/*.js','./app/**/*.html'])
    .on('change', onChange);
  return callback;
});

gulp.task('serve', function(callback) {
  run('http-server app/').exec(function(){
      console.log('Server listening...');
      return callback;
    });
});