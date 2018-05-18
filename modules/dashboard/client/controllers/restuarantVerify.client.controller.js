(function () {
  'use strict';

  angular
    .module('dashboard')
    .controller('RestuarantVerifyController', RestuarantVerifyController);

  RestuarantVerifyController.$inject = ['$scope','VerifyService','Notification'];

  function RestuarantVerifyController($scope,VerifyService,Notification) {

    $scope.postData={};
    $scope.postData.Contact={};

    $scope.SubmitButtonText="Submit Application"
   

    console.log("Aajaoh");
    $scope.submit_form=function()
    {

      VerifyService.sumbit_restuarant(
      $scope.postData
      ).then(successForm).catch(errorForm);

    }

    function successForm(response){

      console.log(response);
      Notification.error({message:"Submitted !!!"});
       $scope.SubmitButtonText="Submitted"
    }
    function errorForm(response){
      console.log(response);
      Notification.error({message:response.data.message});
    }

    $scope.fetchVerficationDetails=function(){
      VerifyService.fetchRestuarantStatus().then(successDetails).catch(errorDetails);


    }

     function successDetails(response){
      console.log(response);
      Notification.success({message:"Success"});
      var details=response;
      if(details.Verified==true){
        $scope.Verified=true;
      }else{
         $scope.Verified=false;

      }
    }  

    function errorDetails(response){
      console.log(response);
      Notification.error({message:response.data.message});
    }


    
    
  }
}());
