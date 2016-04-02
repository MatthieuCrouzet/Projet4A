'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('AddCtrl', ['$scope', 'rscFact', function ($scope, rscFact) {
    $scope.newRSC = {};
    $scope.addRSC = function(newRSC){
      var cpuNumber = Number(newRSC.cpu);
      var coreNumber = Number(newRSC.core);
      if(!cpuNumber || !coreNumber){
        alert('The CPU_ID or the Core_ID isn\'t a number !');
      }else if('hostname' in $scope.newRSC && 'cpu' in $scope.newRSC && 'core' in $scope.newRSC){
          var nodes = rscFact.getResources();
          var rscExist = false;        
          angular.forEach(nodes, function(value, key){
            rscExist = rscExist || (value['id'] == newRSC.core);
          })
          if(!rscExist){
          var newNode = {
            "hostname" : newRSC.hostname,
            "CPU_ID" : newRSC.cpu,
            "Core_ID" : newRSC.core,
            "Alive" : true,
            "State" : "Free",
            "Properties" : {
              "mem" : newRSC.mem,
              "besteffort" : newRSC.besteffort,
              "others" : newRSC.properties
            }
          };
          rscFact.putRSC(newNode);
          alert('The resource has been created !')
          }else{
            alert('This resource already exists !');
          }
        }else{
          alert('You have to complete all fields with * !');
        }
    };
}]);
