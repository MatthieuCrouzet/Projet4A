'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.directive:ngJob
 * @description
 * # ngJob
 * Directive of the sbAdminApp
 */
angular.module('sbAdminApp')
	.directive('ngJob', function(){
		return {
			scope : {
				job : '=',
				suspend : '&',
				restart : '&',
				stop : '&',
				username : '='
			},
			restrict : 'E',
			templateUrl : 'scripts/directives/job/job.html',
			controller: function($scope, $rootScope){
				$scope.color = function(state){
					if(state=='Running'){
						return 'green';
					}else if(state=='Hold'){
						return 'yellow';
					}else{ 
						return 'red';
					}
				}
			}
		}
	})