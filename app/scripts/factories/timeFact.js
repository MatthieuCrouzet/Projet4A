'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.factory:TimeFact
 * @description
 * # TimeFact
 * Factory of the sbAdminApp
 */
angular.module('sbAdminApp')
  .factory('TimeFact', function ($scope) {
  	var factory = {
  		getDate : function() {
        return "2016-03-23 17:22:45";
  		};
  	};
  	return factory;
  });