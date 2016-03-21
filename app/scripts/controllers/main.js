'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope, $rootScope) {
  	$scope.user = "docker";
    $rootScope.Core_ID = '';
    $scope.appui = function(index){
      $rootScope.Core_ID = $scope.all[index]['Core_ID'];
    }
  	$scope.all = [
    	{
    		"hostname" : "node1",
    		"CPU_ID" : 1,
    		"Core_ID" : 1,
    		"RSC_ID" : 1,
    		"Alive" : true,
    		"State" : "Busy",
    		"Properties" : ""
    	},
    	{
    		"hostname" : "node1",
    		"CPU_ID" : 1,
    		"Core_ID" : 2,
    		"RSC_ID" : 2,
    		"Alive" : true,
    		"State" : "Free",
    		"Properties" : ""
    	},
    	{
    		"hostname" : "node2",
    		"CPU_ID" : 2,
    		"Core_ID" : 3,
    		"RSC_ID" : 3,
    		"Alive" : false,
    		"State" : "Free",
    		"Properties" : ""
    	}];
	
  });
