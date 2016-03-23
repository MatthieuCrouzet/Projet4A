'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.factory:JobFact
 * @description
 * # JobFact
 * Factory of the sbAdminApp
 */
angular.module('sbAdminApp')
  .factory('JobFact', function ($scope) {
  	var factory = {
  		var jobs = [];
  		getJobs : function() {
  			return jobs;
  		};
  		getJob : function(index) {
  			return jobs[index];
  		};
  		putJob : function(newJob) {
  			jobs.push(newJob);
  		};
  		deleteJob : function(index) {
  			jobs.splice(index,1);
  		};
  	};
  	return factory;
  });