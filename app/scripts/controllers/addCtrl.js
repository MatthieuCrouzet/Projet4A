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
        var nodes = NodeFact.getNodes();
        var exist = false;
        var nodeExist;
        var cpuExist;
        var coreExist;
        angular.forEach(nodes, function(value, key){
          nodeExist = (value['hostname'] == newRSC.hostname);
          cpuExist = (value['CPU_ID'] == newRSC.cpu);
          coreExist = (value['Core_ID'] == newRSC.core);
          exist = exist || (nodeExist && cpuExist && coreExist);
        })
        if(exist){
          var newNode = {
            "hostname" : newRSC.hostname,
            "CPU_ID" : newRSC.cpu,
            "Core_ID" : newRSC.core,
            "RSC_ID" : NodeFact.newID(),
            "Alive" : true,
            "State" : "Free",
            "Properties" : {
              "mem" : newRSC.mem,
              "besteffort" : newRSC.besteffort,
              "others" : newRSC.properties
            }
          };
          NodeFact.putNode(newNode);
        }else{
          alert('This resource doesn\'t exist !');
        }
      }else{
        alert('You have to complete all fields with * !');
      }
    };
}]);
