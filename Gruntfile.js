module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      vendors: {
        src: ['assets/bootstrap-custom.js', 'assets/handlebars-v4.0.5.js'],
        dest: 'assets/vendors.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);

};
