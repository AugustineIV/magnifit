module.exports={
	options: {
        livereload: true
    },
    html: {
        files: ['html/*.html', 'index.html'],
        tasks: ['htmlhint']
    },
    sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'cssmin']
    },
    js: {
        files: ['js/**/*.js'],
        tasks: ['jshint', 'uglify']
    }
}