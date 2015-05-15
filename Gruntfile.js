module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			task: {
				files: {
					'styles/screen--16x10.css': 'styles/screen--16x10.scss',
					'styles/screen--4x3.css': 'styles/screen--4x3.scss'
				}
			}
		},
		autoprefixer: {
			task: {
				src: 'styles/*.css'
			}
		},
		cssmin: {
			task: {
				files: {
					'styles/screen--16x10.css': 'styles/screen--16x10.css',
					'styles/screen--4x3.css': 'styles/screen--4x3.css'
				}
			}
		},
		usebanner: {
			task: {
				options: {
					banner: '/**\n * <%= pkg.description %>\n * <%= pkg.name %> v<%= pkg.version %>, <%= pkg.homepage %>\n * @copyright 2010–<%= grunt.template.today("yyyy") %> <%= pkg.author.name %>, <%= pkg.author.url %>\n * @license <%= pkg.licenses[0].type %>, <%= pkg.licenses[0].url %>\n */'
				},
				files: {
					'styles/screen--16x10.css': 'styles/screen--16x10.css',
					'styles/screen--4x3.css': 'styles/screen--4x3.css'
				}
			}
		},
		connect: {
			task: {
				options: {
					base: ['../core', '.'],
					livereload: true,
					open: true
				}
			}
		},
		watch: {
			styles: {
				files: 'styles/**/*.scss',
				tasks: 'styles'
			},
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'fonts/*',
					'images/*',
					'pictures/*',
					'styles/*.css',
					'index.html'
				]
			}
		},
		bump: {
			options: {
				files: ['package.json', 'bower.json'],
				commitFiles: ['package.json', 'bower.json'],
				pushTo: 'origin'
			}
		}
	});

	grunt.registerTask('styles', [
		'sass',
		'autoprefixer',
		'cssmin',
		'usebanner'
	]);

	grunt.registerTask('default', [
		'styles',
		'connect',
		'watch'
	]);

};
