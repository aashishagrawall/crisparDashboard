(function () {
  'use strict';

  // Users service used for communicating with the users REST endpoint
  angular
    .module('dashboard')
    .factory('VerifyService', VerifyService);

  VerifyService.$inject = ['$resource'];

  function VerifyService($resource) {
    var Users = $resource('/api/verify', {}, {
     
      submitRestuarant: {
        method: 'POST',
        url: '/api/verify/restuarantPost'
      },

      RestuarantStatus:{
      	 method: 'GET',
        url: '/api/verify/restuarantStatus'
      }
    });

    angular.extend(Users, {
     
      sumbit_restuarant: function (credentials) {
        return this.submitRestuarant(credentials).$promise;
      } ,

      fetchRestuarantStatus: function () {
        return this.RestuarantStatus().$promise;
      }
    });

    return Users;
  }

 
}());
