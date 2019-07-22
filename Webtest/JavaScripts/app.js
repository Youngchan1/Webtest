/*jslint devel: true */	
/* eslint-disable no-console */		
/*eslint no-undef: "error"*/
/* eslint-disable */
'use strict';
 var app = angular.module("myApp", ["ngRoute"]);
		app.config(function($routeProvider) {
		  $routeProvider
		  .when("/main", {
			templateUrl : "main.html",
			controllerAs: 'vm'
		  })
		  .when("/info", {
			templateUrl : "apps/info.html",
			controllerAs: 'vm'
		  })
		  .when("/price", {
			templateUrl : "apps/price.html",
			controllerAs: 'vm'
		  })
		  .when("/help", {
			templateUrl : "apps/help.html",
			controllerAs: 'vm'
		  });
		});

   