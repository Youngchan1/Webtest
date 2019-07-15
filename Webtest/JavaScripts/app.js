/*jslint devel: true */	
/* eslint-disable no-console */		
/*eslint no-undef: "error"*/
/* eslint-disable */
	var app = angular.module("app",["ngRoute"]);
	app.config(function($routeProvider){
	$routeProvider
			.when("/main", {
				templateUrl : "main.html"
				})
			.when("/info",{
				templateUrl : "apps/info.html"
				})
			.when("/main", {
				templateUrl : "main.html"
				})
			.when("/main", {
				templateUrl : "main.html"
				});
	});