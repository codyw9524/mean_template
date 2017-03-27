myApp.factory('TaskFactory', function($http){
	var factory = {};

	factory.index = function(user_id, callback){
		$http.get('/tasks/user/' + user_id).then(callback);
	}

	factory.update = function(task_id, callback){
		$http.post('/tasks/' + task_id).then(callback);
	}

	factory.create = function(data, callback){
		$http.post('/tasks', data).then(callback);
	}

	return factory;
})