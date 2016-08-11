const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const gulp = require('gulp');
const header = require('gulp-header');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sync = require('browser-sync').create();

// Banner

const pkg = require('./package.json');
const banner = `/**
 * ${ pkg.description }
 * ${ pkg.name } v${ pkg.version }, ${ pkg.homepage }
 * @copyright 2010–${ new Date().getFullYear() } ${ pkg.author.name }, ${ pkg.author.url }
 * @license ${ pkg.license }
 */
`;

// Server

gulp.task('default', ['styles'], () => {
	sync.init({
		ui: false,
		notify: false,
		server: {
			baseDir: '.',
			routes: {
				'/shower-core': '../shower-core'
			}
		}
	});

	gulp.watch('styles/**/*.scss', ['styles']);
	gulp.watch('index.html').on('change', sync.reload);
});

// Styles

gulp.task('styles', () => {
	return gulp.src('styles/screen-*.scss')
		.pipe(sass().on('error', sass.logError))
        .pipe(postcss([
			autoprefixer({
				browsers: [
					'> 1%',
					'last 2 versions',
					'Firefox ESR',
					'iOS >= 8',
				]
			}),
			csso
		]))
		.pipe(header(banner, { pkg: pkg }))
		.pipe(gulp.dest('styles'))
		.pipe(sync.stream());
});
