angular.module('baggins-boot', ['ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

 
		$routeProvider.otherwise({redirectTo: '/home'});

	});