/*jslint devel: true */
/* eslint-disable no-console */		
/*eslint no-undef: "error"*/
/*eslint-env node*/
/* eslint-disable */

						 
		var filter = "win16|win32|win64|mac";
		var isPC = false;
		if(navigator.platform){

		if(0 > filter.indexOf(navigator.platform.toLowerCase())){
		console.log("모바일");
		isPC = false;

		}else{
		console.log("데스크탑");
		isPC = true;
			
			}
		}

	/*	$(document).ready(function() {
			$( '.top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );
			console.log(this);
			var a = 1;
			$(window).scroll( function(){
					var top_margin = $(window).scrollTop();
				
				console.log(a);
					console.log(top_margin);
					if(a == 1 && top_margin >= 801 ){
						console.log("g");
						$('.fadeinleft').animate({'opacity':"1",'margin-left': "300px"}, 1000);
						a=2;
					}else if(a == 2 && top_margin <=800){
				console.log("z");
					$('.fadeinleft').animate({'opacity':"0",'margin-left': "0px"}, 1000);
						a=1;
						}
				
            
    });
});*/

		function viewpage(a){// eslint-disable-line no-unused-vars
			var strtext = $(a).text();
			if(strtext == "HOME"){
				  location.replace('main.html');
			}else if(strtext == "INFO"){
				  location.replace('apps/index.html');
			}else if(strtext == "PRICE"){
				console.log("11");
			}else if(strtext == "HELP"){
				console.log("aa");
			}
		}


		$(document).ready(function() {
		
		var $sidebar = $('.sidebar');
		var $sidebarButton = $sidebar.find('button').on('click', function(){
			$sidebar.toggleClass('open');
			if($sidebar.hasClass('open')){
				console.log("2");
				$sidebar.stop(true).animate({left: '-70px'},1000);
				$sidebarButton.find('span').text('CLOSE');
			}else{
				console.log("1");
				$sidebar.stop(true).animate({left: '-300px'},1500);
				$sidebarButton.find('span').text('OPEN');
			}
		});
	});
			$(function(){
			$('.test').vegas({
				slides:[
					{src : 'img/main1.jpg'},
					{src : 'img/main2.jpg'},
					{src : 'img/main3.jpg'}
					
				],delay : 6000})
			});
