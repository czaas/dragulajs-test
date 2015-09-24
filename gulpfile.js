var gulp = require('gulp'),
	uglifyJs = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	minifyHtml = require('gulp-minify-html'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;


gulp.task('default', ['serve']);

gulp.task('serve', function(){
	browserSync.init({
		server: './dist'	
	});
	
	gulp.watch('build/js/*.js', ['js']);
	gulp.watch('build/*.html', ['html']);
})

gulp.task('js', function(){
	return gulp.src('build/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(uglifyJs())
		.pipe(gulp.dest('dist/js'))
		.pipe(reload({stream: true}));
});

gulp.task('html', function(){
	return gulp.src('build/*.html')
		.pipe(minifyHtml())
		.pipe(gulp.dest('dist'))
		.pipe(reload({stream: true}));
});