var myApp = angular.module('myApp', ['ngRoute', 'ngCookies', 'ui.bootstrap']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/partials/new_user.html',
			controller: 'UsersController as UC'
		})
		.when('/dashboard', {
			templateUrl: '/partials/dashboard.html',
			controller: 'UsersController as UC'
		})
		.when('/users/:id', {
			templateUrl: '/partials/user_show.html',
			controller: 'UsersController as UC'
		})
		.otherwise({
			redirectTo: '/'
		})
})
