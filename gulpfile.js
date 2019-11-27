/*!
 * gulp file - v1.0 (2019-11-27T16:55:33+0800)
 * Copyright 2005-2019 56.com
 */

const gulp = require('gulp');
const scss = require('gulp-sass');
const src = './src/scss';

gulp.task('minicss-watch', (cb) => {
	gulp.watch(`${src}/**/*.scss`, gulp.series('mi'));
});

gulp.task('mi', (cb) => {
	console.log('minicss');
	return gulp.src(`${src}/**/*.scss`)
		.pipe(scss())
		.pipe(gulp.dest('./dist/css'));
});
