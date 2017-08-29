const path = require('path');

module.exports = {
    entry:{
        main:path.resolve('./src/script/main.js'),
        a:path.resolve('./src/script/a.js')
    },
	output: {
		path:path.resolve('./dist/js'),
		filename:'[name].js'
	}
};