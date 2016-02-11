'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbAdminApp')
  .directive('sidebar',['$location',function() {
    return {
      templateUrl:'scripts/directives/sidebar/sidebar.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller:function($scope){
        $scope.selectedMenu = 'dashboard';
        $scope.collapseVar = 0;
        $scope.multiCollapseVar = 0;
        $scope.username = 'Login';
        $scope.logged = false;
        
        $scope.login = function(){
		$scope.username = $scope.newusername;
		$scope.logged = true;
		$scope.collapseVar = 0;
        }
        
        $scope.logout = function(){
        	$scope.username = 'Login';
        	$scope.logged = false;
        	$scope.collapseVar = 4;
        }
        
        $scope.check = function(x){
          
          if(x==$scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };
        
        $scope.multiCheck = function(y){
          
          if(y==$scope.multiCollapseVar)
            $scope.multiCollapseVar = 0;
          else
            $scope.multiCollapseVar = y;
        };
      }
    }
  }]);
