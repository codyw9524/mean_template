var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	index: function(req, res){
		User.find({}).exec(function(err, doc){
			if(err){
				console.log(err);
			} else {
				res.json(doc)
			}
		})
	},
	create: function(req, res){
		var user = new User(req.body);
		user.save(function(err, doc){
			if(err){
				res.json(err)
			} else {
				res.json(doc)
			}
		})
	}
}