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
    $scope.newJob['reservation']=TimeFact.getDate();
  	if('Core_ID' in $rootScope.RSC){ 
      $scope.newJob['resource'] = "core="+$rootScope.RSC['Core_ID']+", rsc="+$rootScope.RSC['RSC_ID'];
    }
    if('Properties' in $rootScope.RSC && $rootScope.RSC['Properties']['besteffort']){ 
      $scope.newJob['properties'] = "besteffort"; 
    }
  	$scope.createJob = function(newJob){
      if('name' in $scope.newJob){
        alert('Job created !\n'+JobFact.toString(newJob));
        JobFact.putJob(newJob);
        $scope.newJob = {};
        $rootScope.Core_ID = '';   
        NodeFact.changeNodeState(newJob,"Busy");     
      }else{
        alert('You have to give a name to your job !');
      }

  	}
}]);
