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
var ass;
var self = this;
self.plusSlides = plusSlideshn;
self.currentSlide = currentSlidehn;
						   
showSlides(slideIndex);
						   
/*function plusSlides(n) {
  console.log("넘김");
  showSlides(slideIndex += n);

}*/
function plusSlideshn(n) {
  console.log("넘김");
  showSlides(slideIndex += n);

}

function currentSlidehn(n) {
  console.log("dot");
  showSlides(slideIndex = n);

}

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
        $("html").on('mousewheel DOMMouseScroll', function(e) {
         // html, body 에 마우스 휠 이벤트와 돔마우스스크롤 이벤트를 걸었습니다.
        var E = e.originalEvent;
        	// 변수 E 에다가는 이벤트 객체의 속성으로 사용할 수 있는 속성 인 originalEvent 를 넣었습니다.
        var delta = 0;
        	// 변수 delta 에다가는 숫자 자료형 0 을 넣어 두었습니다.
        if (E.detail) {
            // 이 조건에서는 e.originalEvent 의 속성으로 detail 가 있다면 입니다.
            // 익스, 크롬 등은 e.originalEvent 에 detail 의 속성이 없으나,
            // 파이어 폭스 일 경우엔 detail 속성이 있습니다.
            // 그래서 이 조건을 실행 시킵니다.
            delta = E.detail * -40;
            // 이렇게 해주는 이유는 detail 의 값이 익스와 크롬과는 다르게 3 이 찍힙니다.
            // 익스, 크롬은 120 이 찍히죠.
            // 익스, 크롬과 동일하게 해주기 위해서 이렇게 해줍니다.
        }else{
            // 이곳에서는 익스, 크롬의 e.originalEvent 의 속성으로 wheelDelta 를 사용할 수 있습니다.
            delta = E.wheelDelta;
            if(delta > 0){
                ass = -1;
                plusSlideshn(ass);
            }else{
                ass = 1;
                plusSlideshn(ass);
            }
        };
    });
}]);