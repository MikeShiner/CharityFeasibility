module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      }
      },

    jshint: {
      files: ['src/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
 sass: {
        dist: {
            options: {
                style: 'compressed'
            },
            files: {
                'scss/style.css': 'css/style.scss'
            }
        }
    },


    watch: {
        scripts: {
            files: ['src/*.js'],
            tasks: ['jshint'],
            options: {
                spawn: false,
            },
        },
css: {
            files: ['scss/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false
            }
        }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['watch']);

};