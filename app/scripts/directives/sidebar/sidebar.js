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
      controller:function($scope,$rootScope){
        $scope.selectedMenu = 'dashboard';
        $scope.collapseVar = 0;
        $scope.multiCollapseVar = 0;
        $rootScope.username = 'Login';
        $rootScope.is_admin = false;
        $rootScope.logged = false;
	      $scope.is_admin = true;
        

        $scope.login = function(){
		$rootScope.username = $scope.newusername;
		if ($rootScope.username=='Admin'){
			$rootScope.is_admin = true;
		}
		$scope.collapseVar = 0;
		$rootScope.logged = true;
    $scope.logged = true;
        };
        
        $scope.logout = function(){
        	$rootScope.username = 'Login';
        	$rootScope.logged = false;
        	$rootScope.is_admin = false;
        	$scope.collapseVar = 1;
        };
        
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
