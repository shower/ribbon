var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin'),
	header = require('gulp-header');

var pkg = require('./package.json');
var banner = [
	'/**',
	' * <%= pkg.description %>',
	' * <%= pkg.name %> v<%= pkg.version %>, <%= pkg.homepage %>',
	' * @copyright 2010–<%= new Date().getFullYear() %> <%= pkg.author.name %>, <%= pkg.author.url %>',
	' * @license <%= pkg.license %>',
	' */\n'
].join('\n');

gulp.task('default', function () {
	return gulp.src('styles/screen--*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(header(banner, { pkg: pkg }))
		.pipe(gulp.dest('styles/'));
});
