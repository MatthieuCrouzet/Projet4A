'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.directive:ngSearch
 * @description
 * # ngSearch
 * Directive of the sbAdminApp
 */
angular.module('sbAdminApp')
	.directive('ngSearch', function(){
		return {
			scope : {
				name : '@',
				model : '='
			},
			restrict : 'E',
			templateUrl : 'scripts/directives/search/search.html'
		}
	})