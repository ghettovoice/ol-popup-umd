module.exports = function(grunt) {
    var packageJson = require('./package.json');

    grunt.initConfig({
        basename: packageJson.name,
        version: packageJson.version,
        homepage: packageJson.homepage,
        paths: {
            dest: 'dist',
            src: 'src'
        },
        concat: {
            js: {
                files: [{
                    src: '<%= paths.src %>/*.js',
                    dest: '<%= paths.dest %>/<%= basename %>.js'
                }]
            },
            css: {
                files: [{
                    src: '<%= paths.src %>/*.css',
                    dest: '<%= paths.dest %>/<%= basename %>.css'
                }]
            }
        },
        uglify: {
            build: {
                options: {
                    mangle: true,
                    compress: true
                },
                files: [{
                    src: '<%= paths.dest %>/<%= basename %>.js',
                    dest: '<%= paths.dest %>/<%= basename %>.min.js'
                }]
            }
        },
        cssmin: {
            build: {
                files: [{
                    src: '<%= paths.dest %>/<%= basename %>.css',
                    dest: '<%= paths.dest %>/<%= basename %>.min.css'
                }]
            }
        },
        umd_wrapper: {
            build: {
                files: [{
                    src: '<%= paths.src %>/module',
                    dest: '<%= paths.dest %>/<%= basename %>.js'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-umd-wrapper');

    grunt.registerTask("default", ['concat', 'umd_wrapper:build', 'uglify:build', 'cssmin:build']);
};
