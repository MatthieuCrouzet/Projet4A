'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', ['$scope', '$rootScope', 'rscFact', 'JobFact', function($scope, $rootScope, rscFact, JobFact) {
    $scope.user = "docker";
    $rootScope.RSC = {};
    $scope.order = function(elem){
      return elem['network_address'];
    }
    $scope.getProperties = function(RSC){
      //alert(rscFact.toString(RSC));
      $rootScope.RSC = RSC;
    };
    $scope.sendJob = function(node){
      $rootScope.RSC = node;
    };
    $scope.deleteRSC = function(index){
      var r = confirm("Are you sure you want to delete this resource?")
      if(r==true){
        rscFact.deleteRSC(index);
        JobFact.nodeDeleted(rscFact.getRSC(index))
        alert('This resource have been deleted');
      }
      else {
        alert('The resource wasn\'t deleted !');
      }
    };
    $scope.resources = rscFact.getResources();
    
  }]);