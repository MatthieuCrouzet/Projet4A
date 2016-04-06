'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:NodeCtrl
 * @description
 * # NodeCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('NodeCtrl', ['$scope', '$location', '$rootScope', 'rscFact', function($scope, $location, $rootScope, rscFact){
    $scope.loading = true;
    $scope.error = false;
    $scope.details = [];
    function loadingData(){
      var url = $location.url();
      var params = url.split('/');
      $scope.network_address = params[params.length-1];
      angular.forEach(rscFact.getResources(), function(value, key){
        if(value.network_address == $scope.network_address){
          $scope.details.push(value);
        }
      })
      // var xhr = new XMLHttpRequest();
      // $scope.details = []
      // xhr.open('GET','http://localhost:48080/oarapi/resources/nodes/'+$scope.network_address, false);
      // xhr.send();
      // if(xhr.status == 200){
      //   $scope.resources = JSON.parse(xhr.responseText).items;
      //   var xhr2 = new XMLHttpRequest();
      //   angular.forEach($scope.resources, function(value, key){
      //     xhr2.open('GET','http://localhost:48080/oarapi/resources/'+value.id, false);
      //     xhr2.send();
      //     if(xhr.status == 200){
      //       $scope.details.push(JSON.parse(xhr2.responseText));
      //     }else{
      //       alert('It failed !');
      //     }
      //   })
        
      // }else{
      //   alert('It failed !');
      // }
      if(angular.equals([], $scope.details)){
        $scope.error = true;
        $scope.errorText = "This network_adress doesn\'t exist !";
      }
      $scope.loading = false;
    }
    loadingData();
  }])
