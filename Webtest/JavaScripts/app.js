// JavaScript Document

var app = angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){
		   $routeProvider
		   .when("/main", {
		   		templateUrl : "app/index."
		   });
		   });