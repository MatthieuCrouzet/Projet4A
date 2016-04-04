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
				stop : '&'
			},
			restrict : 'E',
			templateUrl : 'scripts/directives/job/job.html',
			controller: function($scope){
				$scope.color = function(state){
					if(state=='Running'){
						return 'green';
					}else if(state=='Pending'){
						return 'yellow';
					}else{ 
						return 'red';
					}
				}
			}
		}
	})