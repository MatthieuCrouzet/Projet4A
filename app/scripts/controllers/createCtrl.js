'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('CreateCtrl', ['$scope', '$rootScope', 'rscFact', 'TimeFact', 'JobFact', function ($scope, $rootScope, rscFact, TimeFact, JobFact) {
  	$scope.newJob = {};
    $scope.newJob['reservation']=TimeFact.getDateTenMinutesLater();
  	if('id' in $rootScope.RSC){ 
      $scope.newJob['resource'] = "core="+$rootScope.RSC['id'];
    }
  	$scope.createJob = function(newJob){
      if('name' in $scope.newJob){
        var timeOut = newJob['reservation']<TimeFact.getDate()
        if(!timeOut){
          JobFact.putJob(newJob);
          $scope.newJob = {};
          $rootScope.id= '';        
          alert('Job created !\n'+JobFact.toString(newJob)); 
        }else{
          alert('Date of reservation must be in the future');
        } 
      }else{
        alert('You have to give a name to your job !');
      }

  	}
}]);
