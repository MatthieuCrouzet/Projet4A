'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('DetailCtrl', ['$scope', 'rscFact', 'TimeFact', '$location', function($scope, rscFact, TimeFact, $location){
    var url = $location.url();
    url = url.split('=');
    var id = url[url.length-1]
  	$scope.rsc = rscFact.getRSC(id);
  	$scope.available_upto = TimeFact.getDate($scope.rsc.api_timestamp,$scope.rsc.available_upto);
  }])