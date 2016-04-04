'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:ngError
 * @description
 * # ngError
 */
angular.module('sbAdminApp')
	.directive('ngError',function(){
		return {
			scope : {
				text : '@',
				hide : '='
			},
			restrict : 'E',
			templateUrl : 'scripts/directives/error/error.html',
			controller: function($scope){
				setTimeout(afterFiveSeconds, 5000); 
				function afterFiveSeconds(){
					if(!$scope.hide){
						window.location = 'http://localhost:9000/#/dashboard/home';
					}					
				}
			}
		}
	})
