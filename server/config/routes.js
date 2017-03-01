var mongoose = require('mongoose');

var Users = require('./../controllers/users')

module.exports = function(app){
	app.get('/users', Users.index);
	app.post('/users', Users.create)
}
