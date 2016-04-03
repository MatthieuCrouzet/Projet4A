'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('DetailCtrl', ['$scope', 'rscFact', 'JobFact', '$location', function($scope, rscFact, JobFact, $location){
    var url = $location.url();
    var params = url.split('/');
    var paramID = params[params.length-1].split('=');
    $scope.error = false;
    $scope.type = params[params.length-3];    
    $scope.id = paramID[paramID.length-1];
  	if($scope.type=='resources'){
      $scope.objet = rscFact.getRSC($scope.id);
      $scope.type = 'resource';
    }else if($scope.type=='jobs'){
      $scope.objet = JobFact.getJob($scope.id);
      $scope.type=='job'
    }
    $scope.attributs = [];
    if(!angular.equals({}, $scope.objet)){
    	for(var i in $scope.objet){
    		var attribut = {};
    		attribut.name = i;
    		attribut.val = $scope.objet[i];
    		$scope.attributs.push(attribut);
    	}
    }else{
      $scope.error = true;
      $scope.errorText = "This "+$scope.type+" doesn\'t exist !";
    }
  }])