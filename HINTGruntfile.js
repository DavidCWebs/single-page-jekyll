module.exports = function(grunt) {

  // Don't forget to fix exclude: node_modules to _config.yml

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({

    less: {
      development: {
        options: {
          //compress: true
          //paths: ['app/assets/_less']
        },
        files: {'app/assets/_less/main.min.css': [
            'app/assets/_less/style.less']
            }
        }
    },

    copy: {
      css : {
        files: {
          //'_site/css/main.min.css': 'app/assets/_less/main.min.css'
          'css/main.min.css': 'app/assets/_less/main.min.css'
        }
      },
      fonts: {
        files: [{
          cwd: 'app/_bower_components/font-awesome/fonts',  // set working folder / root to copy
          src: '**/*',           // copy all files and subfolders
          dest: '_site/fonts',    // destination folder
          expand: true           // required when using cwd
        }]

      }
    },

    shell: {
      jekyll: {
        command: 'rm -rf _site/*; jekyll build',
        stdout: true
      },
      // If you use the deploy task, make sure the Gruntfile is not pushed to the remote git repo - this would
      // be a serious security vulnerability.
      // Note that the deploy task only works on a machine that has been linked to the relevant server
      // using public/private SSH key pairing.
      deploy: {
        command: 'rsync --progress -a -v -rz --checksum --delete -e "ssh -p 1234" _site/ username@123.345.567:/var/www/yoursite.com/public_html'
      }

    },

    watch: {
      options: {
        livereload: true
      },
      less: {
        files: ['app/assets/_less/*.less'], // Expand this
        tasks: ['lessCopy']
      },
      jekyllSources: {
        files: [
            'css/*', // new line to trigger rebuild if css changes
            'assets/*/*',
            '_includes/**/*.html',
            '_includes/**/*.md',
            '_layouts/*.html',
            '_posts/*.md',
            '_config.yml',
            'index.html',
            'img/*'
        ],
        tasks: [
          'shell:jekyll',
          //'less:development',
          //'copy:css',
          'copy:fonts'
          ]
      }
    },

    connect: {
      server: {
        options: {
          base: '_site/',
          port: 9000
        }
      }
    },

    open: {
      server: {
        path: 'http://localhost:<%= connect.server.options.port %>/'
      }
    }
  });

  grunt.registerTask('lessCopy', ['less:development', 'copy:css']);

  grunt.registerTask('server', [
    'shell:jekyll',
    'less:development',
    'copy:css',
    'copy:fonts',
    'connect:server',
    'open:server',
    'watch'
  ]);

  // Default task.
  grunt.registerTask('default', 'server');

  grunt.registerTask('deploy', [
    'shell:jekyll',
    'less:development',
    'copy:css',
    'copy:fonts',
    'shell:deploy'
  ]);

};
