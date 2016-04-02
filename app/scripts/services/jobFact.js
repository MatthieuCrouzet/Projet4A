'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.factory:JobFact
 * @description
 * # JobFact
 * Factory of the sbAdminApp
 */
angular.module('sbAdminApp')
    .factory('JobFact', [ 'rscFact', '$rootScope', '$http', function (rscFact, $rootScope, $http) {
      var factory = {
      // jobs : [
      //     {
      //       "name" : "job 1",
      //       "resource" : "core=1",
      //       "properties" : "besteffort",
      //       "command" : "/bin/sleep 1000",
      //       "reservation" : "2016-03-21 13:44:55",
      //       "directory" : "/bin",
      //       "State" : "In progress"
      //     },
      //     {
      //       "name" : "job 2",
      //       "resource" : "core=1",
      //       "properties" : "besteffort",
      //       "command" : "/bin/sleep 500",
      //       "reservation" : "2016-03-11 13:44:55",
      //       "directory" : "/bin",
      //       "State" : "Pending"
      //     },
      //     {
      //       "name" : "job 3",
      //       "resource" : "core=2",
      //       "properties" : "besteffort",
      //       "command" : "/bin/sleep 3000",
      //       "reservation" : "2016-03-27 13:44:55",
      //       "directory" : "/bin",
      //       "State" : "Finish"
      //     },
      //     {
      //       "name" : "job 4",
      //       "resource" : "core=2",
      //       "properties" : "besteffort",
      //       "command" : "/bin/sleep 2000",
      //       "reservation" : "2016-03-21 13:54:55",
      //       "directory" : "/bin",
      //       "State" : "In progress"
      //     }
      // ],
      jobs : [],
      getJobs : function() {
        $.ajax({
          url: 'http://localhost:48080/oarapi/resources.json',
          success : function(data){
            factory.jobs = JSON.parse(data);
          },
          error : function(data){
            alert('jobs non chargés');
          }
        })
        return factory.jobs;
      },
      getJob : function(name) {
        var job = {};
        var jobs = factory.getJobs();
        angular.forEach(jobs, function(value, key){
          if(value['name'] == name){
            job = value;
          }
        })
        return job;
      },
      putJob : function(newJob) {
        factory.jobs.push(newJob);
      },
      stopJob : function(job) {
        var r = rscFact.changeRSCState(job,"Finish");
        angular.forEach(factory.jobs, function(value, key){
          if(value['name'] == job['name']){
            if(r==0){
              value['State'] = "Finish"; 
            } else if(r==2){
              value['State'] = "Finish";
            }         
          }
        })
        return r;     
      },
      suspendJob : function(job) {
        var r = rscFact.changeRSCState(job,"Free");
        angular.forEach(factory.jobs, function(value, key){
          if(value['name'] == job['name']){
            if(r==0){
              value['State'] = "Pending"; 
            } else if(r==2){
              value['State'] = "Finish";
            }         
          }
        })
        return r; 
      },
      startJob : function(job) {
        var r = rscFact.changeRSCState(job,"Busy");
        angular.forEach(factory.jobs, function(value, key){
          if(value['name'] == job['name']){
            if(r==0){
              value['State'] = "In progress"; 
            }else if(r==1){
              value['State'] = "Pending";
            } 
            else if(r==2){
              value['State'] = "Finish";
            }         
          }
        })
        return r; 
      },
      nodeDeleted : function(node){
        var core = "core="+node['Core_ID'];
        angular.forEach(factory.getJobs(), function(value, key){
          if(value['State']!='Finish' && value['resource'].includes(core)){
            alert('The job \"'+value['name']+'\" has been stopped !');
            value['State']="Finish";
          }
        })
      },  
      getStates : function(){
        var inprogress = 0; 
        var pending = 0; 
        var finish = 0;
        var states = [];
        angular.forEach(factory.jobs,function(value, key){
          if(value['State']=='In progress'){
            inprogress++;
          }else if(value['State']=='Pending'){
            pending++;
          }else if(value['State']=='Finish'){
            finish++;
          }
        })
        states.push(inprogress);
        states.push(pending);
        states.push(finish);
        return states;
      },
      toString : function(job) {
        var name = "name : " + job.name;
        var resource = "\nresource : " + job.resource;
        var reservation = "\nreservation  : " + job.reservation;
        var directory = "\ndirectory : " + job.directory;
        var type = "\ntype : " + job.type;
        var command = "\ncommand : " + job.command;
        var string = name+resource+type+command+reservation+directory;
        return string;
      }
    };
    return factory;
  }])