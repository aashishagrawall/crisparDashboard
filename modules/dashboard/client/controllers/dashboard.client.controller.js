(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope'];

  function DashboardController($scope) {

    $scope.currentView={};
    $scope.currentView.verifyRestuarant=true;
    $scope.currentView.orders=false;

    $scope.changeTab=function(tab){
     
        $scope.currentView[tab]=true;
    

      angular.forEach($scope.currentView,function(value,key){
        console.log(key);

        if(key!=tab){
          $scope.currentView[key]=false;
        }
      })

      console.log($scope.currentView);

     setTimeout(function(){
      $scope.$apply();

     },100) 

    }
    
    
  }
}());
