(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);
    HomeController.$inject = ['$scope', '$state', 'UsersService', '$location', '$window', 'Authentication', 'PasswordValidator', 'Notification'];

  function HomeController($scope, $state, UsersService, $location, $window, Authentication, PasswordValidator, Notification) {

  	$scope.loginDetails={}; 
  		$scope.signUpDetails={};

  	$scope.Signup=function(){


      UsersService.userSignup($scope.signUpDetails)
        .then(onUserSignupSuccess)
        .catch(onUserSignupError);



  	}

  	$scope.Signin=function(){
    UsersService.userSignin($scope.loginDetails)
        .then(onUserSigninSuccess)
        .catch(onUserSigninError);


  	}

  	  function onUserSignupSuccess(response) {
      // If successful we assign the response to the global user model
      Authentication.user = response;
      Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Signup successful!' });
      // And redirect to the previous or home page
      $state.go($state.previous.state.name || 'home', $state.previous.params);

      $scope.show_login_page=false;
    }

    function onUserSignupError(response) {
      Notification.error({ message: response.data.message, title: '<i class="glyphicon glyphicon-remove"></i> Signup Error!', delay: 6000 });
    }

     function onUserSigninSuccess(response) {
      // If successful we assign the response to the global user model
      Authentication.user = response;
      Notification.info({ message: 'Welcome ' + response.email });
       $scope.show_login_page=false;
      // And redirect to the previous or home page
      $state.go($state.previous.state.name || 'home', $state.previous.params);
    }

    function onUserSigninError(response) {
      Notification.error({ message: response.data.message, title: '<i class="glyphicon glyphicon-remove"></i> Signin Error!', delay: 6000 });
    }
  
  }
}());
