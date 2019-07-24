/*jslint devel: true */
/* eslint-disable no-console */		
/*eslint no-undef: "error"*/
/*eslint-env node*/
/* eslint-disable */
'use strict';
angular
.module('myApp')
.controller('MainCtrl', ['$http'
                       , '$scope',
                         '$location'
                        , function ($http
                                 , $scope,
                                   $location) {
		var self = this;
		self.homeview = homeviewhandlar;
		self.infoview = infoviewhandlar;
        self.priceview = priceviewwhandlar;
		self.helpview = helpviewhandlar;     
		var filter = "win16|win32|win64|mac";
		var isPC = false;
							
		var $sidebar = $('.sidebar');
		if(navigator.platform){

		if(0 > filter.indexOf(navigator.platform.toLowerCase())){
		console.log("모바일");
		isPC = false;

		}else{
		console.log("데스크탑");
		isPC = true;
			
			}
		}
		$scope.firstName = "John";
    	$scope.lastName  = "Doe";
		$(document).ready(function() {
			
		$scope.sidebarButton = $sidebar.find('button').on('click', function(){
			console.log($scope.sidebarButton);
			$sidebar.toggleClass('open');
			if($sidebar.hasClass('open')){
				console.log("2");
				$sidebar.stop(true).animate({left: '-70px'},1000);
				$scope.sidebarButton.find('span').text('CLOSE');
			}else{
				console.log("1");
				$sidebar.stop(true).animate({left: '-230px'},1500);
				$scope.sidebarButton.find('span').text('OPEN');
			}
		});
	});
		/*self.viewpage = viewpagehn;*/
		$scope.mainview = true;
		/*function viewpagehn(a){// eslint-disable-line no-unused-vars
			var strtext = $(a).text();
			console.log(strtext);
			if(strtext == "HOME"){
				$scope.mainview = true;
			}else if(strtext == "INFO"){
				$scope.mainview = false;  
			}else if(strtext == "PRICE"){
				$scope.mainview = false;
			}else if(strtext == "HELP"){
				$scope.mainview = false;
				
			}
			$sidebar.toggleClass('open');
			$sidebar.stop(true).animate({left: '-230px'},1500);
			$scope.sidebarButton.find('span').text('OPEN');
		}*/
            function closesidebar(){
                $sidebar.toggleClass('open');
                $sidebar.stop(true).animate({left: '-230px'},1500);
                $scope.sidebarButton.find('span').text('OPEN');
            }
            function homeviewhandlar(){
                $location.url('/home');
                $scope.mainview = true;
                closesidebar();
            }
            function infoviewhandlar(){
                $location.url('/info');
                $scope.mainview = false;
                closesidebar();
            }
            function priceviewwhandlar(){
                $location.url('/price');
                $scope.mainview = false;
                closesidebar();
            }
            function helpviewhandlar(){
                $location.url('/help');
                $scope.mainview = false;
                closesidebar();
            }
			$(function(){
			$('.test').vegas({
				slides:[
					{src : 'img/main1.jpg'},
					{src : 'img/main2.jpg'},
					{src : 'img/main3.jpg'}
					
				],delay : 6000})
			});
}]);