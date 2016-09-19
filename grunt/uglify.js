module.exports={
	options: {
        manage: false
    },
    my_target: {
        files: {
            'js/main.min.js': ['js/*.js', '!*.min.js']
        }
    }
}