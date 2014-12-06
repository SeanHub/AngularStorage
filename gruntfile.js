module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-wiredep');

	grunt.initConfig({
		wiredep: {
			app: {
				src: 'example/index.html'
			}
		}
	});

	grunt.registerTask('default', function () {
		grunt.log.writeln('no default tasks added');
	});
};