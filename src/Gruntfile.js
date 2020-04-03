module.exports = function(grunt){

    // Project configuration.
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'www/js/*.js',
                ],
                dest: 'www/build/js/main.js',
            },
            css: {
                src: [
                    'www/css/*.css',
                ],
                dest: 'www/build/css/main.css',
            },
        },
        uglify: {
            js: {
                src: [
                  'www/build/js/main.js',
                ],
                dest: 'www/build/js/main.min.js'
            }
        },
        cssmin: {
            css: {
                src: [
                  'www/build/css/main.css',
                ],
                dest: 'www/build/css/main.min.css'
            }
        },

        assets_versioning: {
            js: {
                options: {
                    versionsMapFile: 'www/build/js/assets.json',
                    versionsMapTrimPath: 'www/',
                    tasks: ['uglify:js']
                }
            },
            css: {
                options: {
                    versionsMapFile: 'www/build/css/assets.json',
                    versionsMapTrimPath: 'www/',
                    tasks: ['cssmin:css']
                }
            },
        },
        clean: {
            css: ['www/build/css/*.css', ['!www/<%= grunt.file.readJSON("www/build/css/assets.json")[0].versionedPath %>']],
            js: ['www/build/js/*.js', ['!www/<%= grunt.file.readJSON("www/build/js/assets.json")[0].versionedPath %>']],
        },

        watch: {
            js: {
              files: ['www/js/*.js'],
              tasks: [
                  'concat:js',
                  'uglify:js',
                  'assets_versioning:js',
                  'clean:js'
              ],
            },
            css: {
                files: ['www/css/*.css'],
                tasks: [
                    'concat:css',
                    'cssmin:css',
                    'assets_versioning:css',
                    'clean:css'
                ],
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-assets-versioning');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['watch']);

}