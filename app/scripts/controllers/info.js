'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('InfoCtrl', function ($scope) {
  	$scope.user = "docker";
  	$scope.kill = function(index){
      $scope.jobs.splice(index,1);
    };
  	$scope.jobs = [
  		{
  			"name" : "job 1",
  			"resource" : "core=1,walltime=00:30:00",
  			"properties" : "besteffort",
  			"command" : "/bin/sleep 1000",
  			"reservation" : "2016-03-21 13:44:55",
  			"directory" : "/bin"
  		},
  		{
  			"name" : "job 2",
  			"resource" : "core=3,walltime=00:30:00",
  			"properties" : "besteffort",
  			"command" : "/bin/sleep 500",
  			"reservation" : "2016-03-11 13:44:55",
  			"directory" : "/bin"
  		},
  		{
  			"name" : "job 3",
  			"resource" : "core=2,walltime=00:30:00",
  			"properties" : "besteffort",
  			"command" : "/bin/sleep 3000",
  			"reservation" : "2016-03-27 13:44:55",
  			"directory" : "/bin"
  		},
  		{
  			"name" : "job 4",
  			"resource" : "core=1,walltime=00:30:00",
  			"properties" : "besteffort",
  			"command" : "/bin/sleep 2000",
  			"reservation" : "2016-03-21 13:54:55",
  			"directory" : "/bin"
  		},
  	];
  });
