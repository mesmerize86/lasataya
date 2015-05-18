
/* Wrapper function for Grunt File, which encapsulate your Grunt Configuration*/
module.exports = function(grunt){
	
	/*initialize our configuration object */
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),// This allows us to refer to the values of properties within our package.json
		watch:{
			/* designating what the name of watch test is*/
			sass:{
				/* takes two parameters, files going to watch and test file changes */
				files: 'Sass/*.scss',
				tasks: ['sass', 'concat:styles', 'cssmin'] /* we have already define sass down */
			}	
		},
		concat:{
			options: {
				seperator: "\n\n" /**/
			},
			dist:{
				src: ['content/script/main.js', 'content/script/controller.js' ],
				dest: 'content/script/module/<%= pkg.name %>.js'
			},
			styles:{
				src:['bower_components/bootstrap/dist/css/bootstrap.min.css',
					'content/css/main.css'],
				dest: 'content/css/styles.css'
			}
		},
		uglify:{
			options:{
				mangle: false /*to prevent name from changing it*/
			},
			my_target: {
				files:{
					/* destination files, [] for multiple flies*/
					'content/script/<%= pkg.name %>.min.js' : ['content/script/<%= pkg.name %>.js']
				}
			}
		}, 
		sass:{
			dist: {
				files: {
					/*destination : source */
					'content/css/main.css' : 'sass/main.scss' /* You can use *.scss as well*/
				}
			}
		},
		cssmin:{
			css:{
				src: 'content/css/styles.css',
				dest: 'content/css/styles.min.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-compass');

	//tasks
	grunt.registerTask('minifyJavascript', ['uglify']);
	grunt.registerTask('default', ['concat', 'uglify']);

}