'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('CreateCtrl', ['$scope',  function ($scope) {
	$scope.all_info = '{\nid: '$scope.id+'\nnb core: '+$scope.nb-core+'\nfrenquency: '+$scope.freq+'GHz\n}';
}]);
