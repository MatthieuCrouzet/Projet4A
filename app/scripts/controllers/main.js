'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', ['$scope', '$rootScope', 'NodeFact', function($scope, $rootScope, NodeFact) {
    $scope.user = "docker";
    $rootScope.Core_ID = '';
    $scope.getProperties = function(index){
        alert("Properties : " + $scope.all[index]['Properties']);
    };
    $scope.sendJob = function(index){
      $rootScope.Core_ID = $scope.all[index]['Core_ID'];
    };
    // $scope.all = [
    //     {
    //         "hostname" : "node1",
    //         "CPU_ID" : 1,
    //         "Core_ID" : 1,
    //         "RSC_ID" : 1,
    //         "Alive" : true,
    //         "State" : "Busy",
    //         "Properties" : "test"
    //     },
    //     {
    //         "hostname" : "node1",
    //         "CPU_ID" : 1,
    //         "Core_ID" : 2,
    //         "RSC_ID" : 2,
    //         "Alive" : true,
    //         "State" : "Free",
    //         "Properties" : ""
    //     },
    //     {
    //         "hostname" : "node2",
    //         "CPU_ID" : 2,
    //         "Core_ID" : 3,
    //         "RSC_ID" : 3,
    //         "Alive" : false,
    //         "State" : "Free",
    //         "Properties" : ""
    //     }
    // ];
    $scope.all = NodeFact.getNodes();
    
  }]);