module.exports={
	options: {
        livereload: true
    },
    html: {
        files: ['html/*.html', 'index.html'],
        tasks: ['htmlhint']
    },
    sass: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass', 'cssmin']
    },
    js: {
        files: ['src/js/**/*.js'],
        tasks: ['jshint', 'uglify']
    }
}