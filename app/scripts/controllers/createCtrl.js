'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('CreateCtrl', ['$scope', '$rootScope', 'NodeFact', 'TimeFact', 'JobFact', function ($scope, $rootScope, NodeFact, TimeFact, JobFact) {
  	$scope.newJob = {};
    $scope.newJob['reservation']=TimeFact.getDateTenMinutesLater();
  	if('Core_ID' in $rootScope.RSC){ 
      $scope.newJob['resource'] = "core="+$rootScope.RSC['Core_ID'];
    }
    if('Properties' in $rootScope.RSC && $rootScope.RSC['Properties']['besteffort']){ 
      $scope.newJob['properties'] = "besteffort"; 
    }
  	$scope.createJob = function(newJob){
      if('name' in $scope.newJob){
        var timeOut = newJob['reservation']<TimeFact.getDate()
        if(!timeOut){
          JobFact.putJob(newJob);
          $scope.newJob = {};
          $rootScope.Core_ID = '';        
          alert('Job created !\n'+JobFact.toString(newJob)); 
        }else{
          alert('Date of reservation must be in the future');
        } 
      }else{
        alert('You have to give a name to your job !');
      }

  	}
}]);
