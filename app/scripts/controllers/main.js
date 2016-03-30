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
    $scope.order = function(elem){
      return elem['hostname'];
    }
    $scope.getProperties = function(node){
      alert(NodeFact.toString(node));
      $rootScope.RSC = node;
    };
    $scope.sendJob = function(node){
      $rootScope.RSC = node;
    };
    $scope.deleteRSC = function(index){
      var r = confirm("Are you sure you want to delete this resource?")
      if(r==true){
        NodeFact.deleteNode(index);
        JobFact.nodeDeleted(NodeFact.getNode(index))
        alert('This resource have been deleted');
      }
      else {
        alert('The resource wasn\'t deleted !');
      }
    };
    $scope.all = NodeFact.getNodes();
    
  }]);