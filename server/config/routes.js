var mongoose = require('mongoose');

var Users = require('./../controllers/users');
var Tasks = require('./../controllers/tasks');

module.exports = function(app){
	app.get('/users', Users.index);
	app.post('/users', Users.create);
	app.post('/sessions', Users.login);
	app.get('/tasks', Tasks.index);
	app.post('/tasks', Tasks.create);
	app.post('/tasks/:id', Tasks.update);
	app.get('/users/:id', Users.show);
	app.get('/tasks/user/:id', Tasks.getByUser);
}
