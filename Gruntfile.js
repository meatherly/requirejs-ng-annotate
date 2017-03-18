module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
                     pkg: grunt.file.readJSON('package.json'),
                     requirejs: {
                       compile: {
                         options: {
                           // dir: "../",
                           baseUrl: ".",
                           name: "index",
                           // mainConfigFile: "index.js",
                           out: "bin/main.js",
                           // disabling timeout for script loading to support slow internet connections
                           waitSeconds: 0,
                           optimize: "none",
                           paths: {
                             "nga": "plugins/nga"
                           },
                           stubModules: ["nga"],
                           nodeRequire: require
                         }
                       }
                     }
                   });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task(s).
  grunt.registerTask('default', ['requirejs']);

};