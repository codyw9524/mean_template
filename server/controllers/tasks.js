var mongoose = require('mongoose')
var Task = mongoose.model('Task');

module.exports = {
	index: function(req, res){
		Task.find({}).exec(function(err, doc){
			if(err){
				console.log(err)
			} else {
				res.json(doc)
			}
		})
	},
	create: function(req, res){
		if(req.body.altUser){
			let task = new Task();
			task.title = req.body.title;
			task.description = req.body.description;
			task._user = req.body.altUser;
			task.save(function(err, doc){
				if(err){
					console.log(err);
				}
			})
		}
		var task = new Task(req.body)
		task.save(function(err, doc){
			if(err){
				return res.json(err);
			} else {
				return res.json(doc);
			}
		})
	},
	update: function(req, res){
		Task.findOne({_id: req.params.id}).exec(function(err, doc){
			if(err){
				console.log(err)
			} else {
				doc.status = !doc.status
				doc.save(function(err, doc){
					if(err){
						console.log(err);
					} else {
						res.json(doc)
					}
				})
			}
		})
	},
	getByUser: function(req, res){
		Task.find({_user: req.params.id}).populate('_user').exec(function(err, doc){
			if(err){
				return res.json(err)
			} else {
				return res.json(doc)
			}
		})
	}
}