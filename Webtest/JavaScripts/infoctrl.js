/*jslint devel: true */
/* eslint-disable no-console */		
/*eslint no-undef: "error"*/
/*eslint-env node*/
/* eslint-disable */
'use strict';
angular
.module('myApp')
.controller('infoCtrl', ['$http'
                       , '$scope'
					   , '$location'
                       , function ($http
                                 , $scope
						   		 , $location) {
console.log("시작");
var slideIndex = 1;
                            
showSlides(slideIndex);


function showSlides(n) {
  console.log("슬라이드");
  var i;

  var slides = document.getElementsByClassName("mySlides");
  console.log(slides);
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
      slideIndex = 1
  }

  if (n < 1) {
      slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {

      slides[i].style.display = "none";

  }

  for (i = 0; i < dots.length; i++) {

      dots[i].className = dots[i].className.replace(" active", "");

  }

  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";

}
}]);