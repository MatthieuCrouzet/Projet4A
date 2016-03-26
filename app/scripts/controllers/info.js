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
    $scope.jobs = JobFact.getJobs();
  	$scope.stopJob = function(job){
      var r = confirm("Are you sure you want to stop this job?")
      if(r==true){
        alert('The job have been stopped');
        JobFact.stopJob(job);
      }
      else {
        alert('The job wasn\'t stopped !');
      }
    };
    $scope.suspendJob = function(job){
      var r = confirm("Are you sure you want to suspend this job?")
      if(r==true){
        alert('The job have been suspend');
        JobFact.suspendJob(job);
      }
      else {
        alert('The job wasn\'t suspended !');
      }  
    }
    $scope.restartJob = function(job){
      var r = confirm("Are you sure you want to restart this job?")
      if(r==true){
        alert('The job have been restart');
        JobFact.startJob(job);
      }
      else {
        alert('The job wasn\'t restarted !');
      }  
    }
    $scope.order = function(job){
      if(job['State']=='Finish'){
        return 3;
      }else if(job['State']=='Pending'){
        return 2;
      }else{
        return 1;
      }
    }
  }]);

