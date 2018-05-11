(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController2', HomeController2);

  function HomeController2($scope) {
   

    $scope.toggleMenu=function(){

    	document.querySelector('#MenuOverlay').classList.toggle('open')
    }
  }
}());
