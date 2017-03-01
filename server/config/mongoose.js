var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://localhost/bucket_list2');

var models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') != -1){
		require(models_path + '/' + file);
	}
})
