'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', ['$scope', '$rootScope', 'NodeFact', 'JobFact', function($scope, $rootScope, NodeFact, JobFact) {
    $scope.user = "docker";
    $rootScope.RSC = {};
    $scope.getProperties = function(index){
      var node = NodeFact.getNode(index);
      alert(NodeFact.toString(node));
    };
    $scope.sendJob = function(index){
      JobFact.sendJob(index);
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