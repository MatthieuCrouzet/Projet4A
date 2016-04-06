'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
 .controller('InfoCtrl', ['$scope', 'JobFact', function ($scope, JobFact, $rootScope) {
    $scope.jobs = JobFact.getJobs();
    // $scope.pie = {
    //   'data' : [],
    //   'labels' : ['Running', 'Pending', 'Finish' ],
    //   'color' : ['green', 'yellow', 'red']
    // };
    // $scope.getStates = function(){
    //   return JobFact.getStates();
    // }
    // $scope.$watchCollection('getStates',function(){
    //   $scope.pie['data'] = $scope.getStates();
    // });
    $scope.stopJob = function(job){
      var r = confirm("Are you sure you want to stop this job?");
      JobFact.stopJob(job);
      alert('The job have been stopped');
    };
    $scope.suspendJob = function(job){
      var r = confirm("Are you sure you want to suspend this job?");
      JobFact.suspendJob(job);
      if(r==true){
          alert('The job have been suspend');
      }else{
        alert('The job wasn\'t suspended !');
      } 
    }
    $scope.restartJob = function(job){
      var r = confirm("Are you sure you want to restart this job?");
      var res = JobFact.startJob(job);
      if(r==true){
          alert('The job have been restart');
      }
      else {
        alert('The job wasn\'t restarted !');
      }  
    }
    $scope.order = function(job){
      if(job['state']=='Finish'){
        return 3;
      }else if(job['state']=='Pending'){
        return 2;
      }else{
        return 1;
      }
    }
  }]);

