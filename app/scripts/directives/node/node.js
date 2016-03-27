'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.directive:ngNode
 * @description
 * # ngNode
 * Directive of the sbAdminApp
 */
angular.module('sbAdminApp')
	.directive('ngNode', function(){
		return {
			scope : {
				node : '=',
				sendJob : '&',
				getProperties : '&',
				deleteRSC : '&'
			},
			restrict : 'E',
			templateUrl : 'scripts/directives/node/node.html'
		}
	})