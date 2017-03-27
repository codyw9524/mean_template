myApp.controller('UsersController', function(UserFactory, $cookies, $location, $routeParams){
	console.log('instanciating UsersController')
	
	var self = this;
	self.registrationErrors = [];
	self.loginErrors = [];
	self.current_user = {};
	self.users = [];

	UserFactory.session(function(res){
		console.log("Is there a User ID in session?", res)
		if(res){
			self.current_user = res.data;
		} else {
			console.log('redirecting bc no id in session...')
			$location.url('/');
		}
	})

	self.show = function(){
		UserFactory.show($routeParams.id, function(res){
			self.user = res.data;
		})
	}


	self.closeAlert = function(index, array){
		array.splice(index, 1);
	}

	self.index = function(){
		UserFactory.index(function(res){
			self.users = res.data;
		})
	}

	self.login = function(loginUser){
		self.loginErrors = [];
		UserFactory.login(loginUser, function(res){
			console.log(res);
			if(res.data.errors){
				if(loginUser){
					loginUser.email = "";
					loginUser.password = "";
				}
				for(key in res.data.errors){
					self.loginErrors.push({
						"type": "danger",
						"msg": res.data.errors[key]['message']
					})
				}
			} else {
				$location.url('/dashboard')
			}
		})
	}

	self.logout = function(){
		$cookies.remove('user_id');
		$location.url('/');
	}

	self.createUser = function(newUser){
		self.errors = [];
		UserFactory.create(newUser, function(res){
			if(res.data.errors){
				console.log('errors in user registration')
				if(newUser){
					newUser.password = "";
					newUser.password_confirmation = "";
				}
				for(key in res.data.errors){
					self.registrationErrors.push({
						"type": "danger",
						"msg": res.data.errors[key]['message']
					})
				}
			} else {
				console.log('user added to DB')
				$location.url('/dashboard')
			}
		})
	}

	if($location.$$path.indexOf('users') != -1){
		self.show()
	}

	self.index()
})
