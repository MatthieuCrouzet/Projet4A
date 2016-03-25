'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('CreateCtrl', ['$scope', '$rootScope', 'TimeFact', 'JobFact', function ($scope, $rootScope, TimeFact, JobFact) {
  	$scope.newJob = {};
    $scope.newJob['reservation']=TimeFact.getDate();
  	if('Core_ID' in $rootScope.RSC){ 
      $scope.newJob['resource'] = "core="+$rootScope.RSC['Core_ID']+",walltime=00:30:00";
    }
    if('Properties' in $rootScope.RSC && $rootScope.RSC['Properties']['others'].match("besteffort=YES")){ 
      $scope.newJob['properties'] = "besteffort"; 
    }
  	$scope.createJob = function(newJob){
      if('name' in $scope.newJob){
        alert('Job created !\n'+JobFact.toString(newJob));
        JobFact.putJob(newJob);
        $scope.newJob = {};
        $rootScope.Core_ID = '';        
      }else{
        alert('You have to give a name to your job !');
      }

  	}
}]);
