'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
 .controller('InfoCtrl', ['$scope', 'JobFact', function ($scope, JobFact) {
  	$scope.user = "docker";
    $scope.jobs = JobFact.getJobs();
    $scope.pie = {
      'data' : [],
      'labels' : [
        'In progress',
        'Pending',
        'Finish'
      ]
    };
    $scope.getStates = function(){
      var inprogress = 0; 
      var pending = 0; 
      var finish = 0;
      var states = [];
      angular.forEach($scope.jobs,function(value, key){
        if(value['State']=='In progress'){
          inprogress++;
        }else if(value['State']=='Pending'){
          pending++;
        }else if(value['State']=='Finish'){
          finish++;
        }
      })
      states.push(inprogress);
      states.push(pending);
      states.push(finish);
      return states;
    }
    $scope.$watchCollection('getStates',function(){
      $scope.pie['data'] = $scope.getStates();
    });
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

