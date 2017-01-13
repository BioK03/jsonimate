var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('default', function(){
    gulp.watch('./jsonimate/jsonimate.engine.js', ['compress']);
});

gulp.task('compress', function() {
   gulp.src('./jsonimate/jsonimate.engine.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest('./jsonimate'));
});
