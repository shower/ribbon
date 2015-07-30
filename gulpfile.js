var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin');

var pkg = require('./package.json');
var banner = [
	'/**',
	' * <%= pkg.description %>',
	' * <%= pkg.name %> v<%= pkg.version %>, <%= pkg.homepage %>',
	' * @copyright 2010–<%= new Date().getFullYear() %> <%= pkg.author.name %>, <%= pkg.author.url %>',
	' * @license <%= pkg.licenses[0].type %>, <%= pkg.licenses[0].url %>',
	' */\n'
].join('\n');

gulp.task('default', function () {
	return gulp.src('styles/screen--*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(gulp.dest('styles/'));
});

// var gulp = require('gulp');
// var plugins = require('gulp-load-plugins')({
// 	rename: {
// 		'gulp-concat-util': 'concat'
// 	}
// });
// var pkg = require('./package.json');
// var banner = [
// 	'/**',
// 	' * <%= pkg.description %>',
// 	' * <%= pkg.name %> v<%= pkg.version %>, <%= pkg.homepage %>',
// 	' * @copyright 2010–<%= new Date().getFullYear() %> <%= pkg.author.name %>, <%= pkg.author.url %>',
// 	' * @license <%= pkg.licenses[0].type %>, <%= pkg.licenses[0].url %>',
// 	' */\n'
// ].join('\n');

// function styles(ratio) {
// 	return gulp.src('styles/screen.scss')
// 		.pipe(plugins.rename('screen--' + ratio + '.scss'))
// 		.pipe(plugins.concat_util.header('$ratio:' + ratio + ';'))
// 		.pipe(plugins.sass())
// 		.pipe(plugins.autoprefixer())
// 		.pipe(plugins.cssmin())
// 		.pipe(plugins.concat.header(banner))
// 		.pipe(gulp.dest('styles/'));
// }

// function styles(ratio) {
// 	return gulp.src([
// 	// return gulp.src([
// 	// 		'styles/screen.scss',
// 	// 		'styles/ratio/ratio--' + ratio + '.scss'])
// 	// 	.pipe(plugins.concat('../../screen--' + ratio + '.scss'))
// 	// 	.pipe(plugins.sass())
// 	// 	.pipe(plugins.autoprefixer())
// 	// 	.pipe(plugins.cssmin())
// 	// 	.pipe(plugins.header(banner, { pkg: pkg }))
// 	// 	.pipe(gulp.dest('styles/'));
// }

// gulp.task('16x10', function() { return styles('16/10'); });
// gulp.task('4x3', function() { return styles('4/3'); });

// gulp.task('default', ['16x10', '4x3']);

// function bump(importance) {
// 	return gulp.src(['./package.json', './bower.json'])
// 		.pipe(plugins.bump({type: importance}))
// 		.pipe(gulp.dest('./'))
// 		.pipe(plugins.git.commit('bumps package version'))
// 		.pipe(plugins.filter('package.json'))
// 		.pipe(plugins.tag_version());
// }

// gulp.task('patch', function() { return bump('patch'); });
// gulp.task('feature', function() { return bump('minor'); });
// gulp.task('release', function() { return bump('major'); });
