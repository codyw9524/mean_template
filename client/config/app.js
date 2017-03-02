var myApp = angular.module('myApp', ['ngRoute', 'ngCookies', 'ui.bootstrap']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/partials/new_user.html',
			controller: 'UsersController as UC'
		})
		.when('/success', {
			templateUrl: '/partials/success.html',
			controller: 'UsersController as UC'
		})
		.otherwise({
			redirectTo: '/'
		})
})
