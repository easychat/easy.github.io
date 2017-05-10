module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      haml: {
        files: ['./src/**/*.haml'],
        tasks: ['newer:haml'],
        options: {
          spawn: false,
        },
      },

      css: {
        files: ['./src/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      }
    },

    sass: {
      dist: {
        options: {
         style: 'expanded'
       },
        files: {
          'style.css': './src/style.scss'
        }
      }
    },

    haml: {
      dist: {
        expand: true,
        ext: '.html',
        src: ['./src/**/*.haml'],
        dest: './',
        rename: function (dest, src) {
          return dest + src.split("/").slice(-1)[0];
        }
      },
    },

  });

  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-haml2html');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', [
    'haml', 'sass'
  ]);
};
