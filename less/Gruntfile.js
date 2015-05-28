module.exports = function(grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false
                },
                files: {
                    "assets/css/smartqd.css": "less/smart_qd.less",
                    "assets/css/login.css": "less/smart_login.less"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};