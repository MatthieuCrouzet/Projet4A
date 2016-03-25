'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('AddCtrl', ['$scope', 'NodeFact', function ($scope, NodeFact) {
    $scope.newRSC = {};
    $scope.addRSC = function(newRSC){
      if('hostname' in $scope.newRSC && 'cpu' in $scope.newRSC && 'core' in $scope.newRSC){
        var newNode = {
          "hostname" : newRSC.hostname,
          "CPU_ID" : newRSC.cpu,
          "Core_ID" : newRSC.core,
          "RSC_ID" : NodeFact.newID(),
          "Alive" : true,
          "State" : "Free",
          "Properties" : {
            "mem" : newRSC.mem,
            "others" : newRSC.properties
          }
        };
        NodeFact.putNode(newNode);
      }else{
      alert('You have to complete all fields with * !');
      }
    }
}]);
