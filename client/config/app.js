var myApp = angular.module('myApp', ['ngRoute', 'ngCookies', 'ui.bootstrap']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/partials/new_user.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})
