'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('DetailCtrl', ['$scope', 'NodeFact', '$location', function($scope, NodeFact, $location){
  	var b = true;
    var url = $location.url();
    url = url.split('=');
    var id = url[url.length-1]
  	$scope.rsc = NodeFact.getNode(id);
  }])