'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.factory:JobFact
 * @description
 * # JobFact
 * Factory of the sbAdminApp
 */
angular.module('sbAdminApp')
  .factory('JobFact', function () {
  	var factory = {
  		jobs : [
  			{
  				"id" : 1,
	  			"name" : "job 1",
	  			"resource" : "core=1,walltime=00:30:00",
	  			"properties" : "besteffort",
	  			"command" : "/bin/sleep 1000",
	  			"reservation" : "2016-03-21 13:44:55",
	  			"directory" : "/bin"
	  		},
	  		{
	  			"id" : 2,
	  			"name" : "job 2",
	  			"resource" : "core=3,walltime=00:30:00",
	  			"properties" : "besteffort",
	  			"command" : "/bin/sleep 500",
	  			"reservation" : "2016-03-11 13:44:55",
	  			"directory" : "/bin"
	  		},
	  		{
	  			"id" : 3,
	  			"name" : "job 3",
	  			"resource" : "core=2,walltime=00:30:00",
	  			"properties" : "besteffort",
	  			"command" : "/bin/sleep 3000",
	  			"reservation" : "2016-03-27 13:44:55",
	  			"directory" : "/bin"
	  		},
	  		{
	  			"id" : 4,
	  			"name" : "job 4",
	  			"resource" : "core=1,walltime=00:30:00",
	  			"properties" : "besteffort",
	  			"command" : "/bin/sleep 2000",
	  			"reservation" : "2016-03-21 13:54:55",
	  			"directory" : "/bin"
	  		}
  		],
  		getJobs : function() {
  			return factory.jobs;
  		},
  		getJob : function(id) {
  			var job = {};
  			angular.forEach(factory.jobs, function(value, key){
  				if(value.id == id) {
  					job = value;
  				}
  			})
  			return job;
  		},
  		putJob : function(newJob) {
  			factory.jobs.push(newJob);
  		},
  		deleteJob : function(index) {
  			factory.jobs.splice(index,1);
  		}
  	};
  	return factory;
  });