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
    $rootScope.RSC = {};
    $scope.getProperties = function(index){
        alert("Properties : \n" + "\tMemory : " + $scope.all[index]['Properties']['mem'] + "\n\tOthers : " + $scope.all[index]['Properties']['others']);
    };
    $scope.sendJob = function(index){
      $rootScope.RSC = $scope.all[index];
    };
    $scope.deleteRSC = function(index){
      var r = confirm("Are you sure you want to delete this resource?")
      if(r==true){
        alert('This resource have been deleted');
        NodeFact.deleteNode(index);
      }
      else {
        alert('The resource wasn\'t deleted !');
      }
    };
    $scope.all = NodeFact.getNodes();
    
  }]);