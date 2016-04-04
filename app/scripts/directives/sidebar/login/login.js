'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.directive:ngLogin
 * @description
 * # ngLogin
 * Directive of the sbAdminApp
 */
angular.module('sbAdminApp')
	.directive('ngLogin', function(){
		return {
			scope : {
			},
			restrict : 'E',
			templateUrl : 'scripts/directives/sidebar/login/login.html',
			controller:function($scope, $rootScope){
		        $rootScope.username = 'Anonymous';
		        $scope.user = '';
		        $scope.login = function(username, password){
		        	if(username=='oar' || username=='docker'){
		        		if(username==password){
		        			$rootScope.username = username;
		        			$scope.user = username;
		        			$scope.username = '';
		        			$scope.password = '';
		        		}else{
		        			alert('Wrong password ! ');
		        		}
		        	}else{
		        		alert('Wrong username !');
		        	}
		        }
		        $scope.isConnect = function(){
		        	if($rootScope.username=='oar' || $rootScope.username=='docker'){
		        		return true;
		        	}else{
		        		return false;
		        	}
		        }
		        $scope.logout = function(){
		        	$rootScope.username = 'Anonymous';
		        }
		    }
		}
	})