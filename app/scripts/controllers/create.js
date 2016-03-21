'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('CreateCtrl', function ($scope, $rootScope) {
  	$scope.newJob = {};
  	if($rootScope.Core_ID){ $scope.newJob['resource'] = "core="+$rootScope.Core_ID+",walltime=00:30:00"; };  	
  	$scope.createJob = function(newJob){
  		alert('Job bien créé !\n'+JSON.stringify(newJob));
  		$scope.newJob = {};
  		$rootScope.Core_ID = '';
  	}
});
