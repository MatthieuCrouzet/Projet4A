'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
 .controller('InfoCtrl', ['$scope', 'JobFact' , function ($scope, JobFact) {
  	$scope.user = "docker";
  	$scope.deleteJob = function(index){
      var r = confirm("Are you sure you want to delete this job?")
      if(r==true){
        alert('The job have been deleted');
        JobFact.deleteJob(index);
      }
      else {
        alert('The job wasn\'t deleted !');
      }
    };
    $scope.jobs = JobFact.getJobs();
  }]);

