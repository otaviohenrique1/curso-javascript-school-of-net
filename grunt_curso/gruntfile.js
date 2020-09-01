module.exports = function(grunt) {
    const mozjpeg = require('imagemin-mozjpeg');
    
    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            file_main_js: {
                files: {
                    'assets/js/main.min.js': ['assets/_js/main.js']
                }
            }
        },
        sass: {
            dist: {
                options: {style: 'compressed'},
                files: {
                    'assets/css/style.min.css': 'assets/_sass/style.scss'
                }
            }
        },
        watch: {
            dist: {
                files: ['assets/_js/**/*', 'assets/_sass/**/*', '_index.html'],
                tasks: ['concat', 'uglify', 'sass', 'htmlmin'],
                options: {
                    livereload: true
                }
            }
        },
        shell: {
            options: {
                stderr: false,
            },
            mkdir: {
                command: function(dir) {
                    return 'mkdir ' + dir;
                }
            }
        },
        concat: {
            js: {
                src: 'assets/_js/_src/*.js',
                dest: 'assets/_js/main.js'
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [mozjpeg()]
                },
                files: [{
                    expand: true,
                    cwd: 'assets/_img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/img/'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': '_index.html'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    // keepalive: false, // false -> para quando for rodar o watch
                    // keepalive: true, // true -> para quando nao for rodar o watch
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'htmlmin']);
    // grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin', 'htmlmin']);
    grunt.registerTask('w', ['watch']);
    grunt.registerTask('mk', function(dir) {
        grunt.task.run('shell:mkdir:' + dir)
    });
    grunt.registerTask('c', ['concat']);
    // grunt.registerTask('img', ['imagemin']);
    grunt.registerTask('html', ['htmlmin']);
    grunt.registerTask('serve', ['connect', 'watch']);
}