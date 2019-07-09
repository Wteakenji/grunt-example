module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
		includereplace: {
			hebing: {
				options: {
				// Task-specific options go here.
				},
				// Files to perform replacements and includes with
				src: 'hello.html',
				// Destination directory to copy files to
				dest: 'dist/hello.html'
			}
		}
  });

  // Load the plugin that provides the "uglify" task.
 // grunt.loadNpmTasks('grunt-contrib-uglify');
//grunt.loadNpmTasks('grunt-include-replace');
	grunt.loadNpmTasks('grunt-include-replace');
  // Default task(s).
  grunt.registerTask('default', ['includereplace:hebing']);

};