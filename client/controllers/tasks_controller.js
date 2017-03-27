myApp.controller('TasksController', function(UserFactory, TaskFactory, $location, $cookies, $routeParams){
	var self = this;
	self.tasks = [];
	self.errors = [];

	self.index = function(user_id=$cookies.get('user_id')){
		TaskFactory.index(user_id, function(res){
			self.tasks = res.data;
		})
	}

	self.update = function(task_id){
		TaskFactory.update(task_id, function(res){
			self.index();
		})
	}

	self.create = function(newTask){
		self.errors = [];
		user_id = $cookies.get('user_id')
		newTask['_user'] = user_id
		TaskFactory.create(newTask, function(res){
			if(res.data.errors){
				for(key in res.data.errors){
					let error = res.data.errors[key];
					self.errors.push(error.message);
				}
				console.log(res.data.errors);
			} else {
				console.log(res);
				self.newTask = {};
				self.index();
			}
		})
	}

	if($location.$$path.indexOf('dashboard') != -1){
		self.index();
	}
	else if($location.$$path.indexOf('users') != -1){
		self.index($routeParams.id)
	}
})