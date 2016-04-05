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
      jobs :[
        {
          "api_timestamp": 1352707511,
          "array_id": 5540,
          "array_index": null,
          "command": "sleep 300",
          "cpuset_name": "kameleon_5540",
          "dependencies": [],
          "events": [],
          "exit_code": null,
          "id": 5540,
          "initial_request": "oarsub sleep 300",
          "launching_directory": "/home/kameleon",
          "links": [
            {
              "href": "/oarapi/jobs/5540",
              "rel": "self"
            },
            {
              "href": "/oarapi/jobs/5540/resources",
              "rel": "collection",
              "title": "resources"
            },
            {
              "href": "/oarapi/jobs/5540/nodes",
              "rel": "collection",
              "title": "nodes"
            }
          ],
          "message": "Karma = 0.000",
          "name": null,
          "nodes": [
            {
              "api_timestamp": 1352707511,
              "links": [
                {
                  "href": "/oarapi/resources/nodes/node1",
                  "rel": "self"
                }
              ],
              "network_address": "node1",
              "status": "assigned"
            }
          ],
          "owner": "kameleon",
          "project": "default",
          "properties": "desktop_computing = 'NO'",
          "queue": "default",
          "reservation": "None",
          "resources": [
            {
              "api_timestamp": 1352707511,
              "id": 1,
              "links": [
                {
                  "href": "/oarapi/resources/1",
                  "rel": "self"
                },
                {
                  "href": "/oarapi/resources/1/jobs",
                  "rel": "collection",
                  "title": "jobs"
                }
              ],
              "status": "assigned"
            }
          ],
          "resubmit_job_id": null,
          "scheduled_start": 1352707488,
          "start_time": 1352707488,
          "state": "Running",
          "stderr_file": "OAR.5540.stdout",
          "stdout_file": "OAR.5540.stderr",
          "stop_time": 0,
          "submission_time": 1352707487,
          "type": "PASSIVE",
          "types": [],
          "walltime": 7200,
          "wanted_resources": "-l \"{type = 'default'}/resource_id=1,walltime=2:0:0\" "
        },
        {
          "api_timestamp": 1352707511,
          "array_id": 5542,
          "array_index": null,
          "command": "sleep 300",
          "cpuset_name": "kameleon_5542",
          "dependencies": [],
          "events": [],
          "exit_code": null,
          "id": 5542,
          "initial_request": "oarsub -l /core=2 sleep 300",
          "launching_directory": "/home/kameleon",
          "links": [
            {
              "href": "/oarapi/jobs/5542",
              "rel": "self"
            },
            {
              "href": "/oarapi/jobs/5542/resources",
              "rel": "collection",
              "title": "resources"
            },
            {
              "href": "/oarapi/jobs/5542/nodes",
              "rel": "collection",
              "title": "nodes"
            }
          ],
          "message": "Karma = 0.000",
          "name": null,
          "nodes": [
            {
              "api_timestamp": 1352707511,
              "links": [
                {
                  "href": "/oarapi/resources/nodes/node1",
                  "rel": "self"
                }
              ],
              "network_address": "node1",
              "status": "assigned"
            }
          ],
          "owner": "kameleon",
          "project": "default",
          "properties": "desktop_computing = 'NO'",
          "queue": "default",
          "reservation": "None",
          "resources": [
            {
              "api_timestamp": 1352707511,
              "id": 3,
              "links": [
                {
                  "href": "/oarapi/resources/3",
                  "rel": "self"
                },
                {
                  "href": "/oarapi/resources/3/jobs",
                  "rel": "collection",
                  "title": "jobs"
                }
              ],
              "status": "assigned"
            },
            {
              "api_timestamp": 1352707511,
              "id": 4,
              "links": [
                {
                  "href": "/oarapi/resources/4",
                  "rel": "self"
                },
                {
                  "href": "/oarapi/resources/4/jobs",
                  "rel": "collection",
                  "title": "jobs"
                }
              ],
              "status": "assigned"
            }
          ],
          "resubmit_job_id": null,
          "scheduled_start": 1352707510,
          "start_time": 1352707510,
          "state": "Running",
          "stderr_file": "OAR.5542.stdout",
          "stdout_file": "OAR.5542.stderr",
          "stop_time": 0,
          "submission_time": 1352707509,
          "type": "PASSIVE",
          "types": [],
          "walltime": 7200,
          "wanted_resources": "-l \"{type = 'default'}/core=2,walltime=2:0:0\" "
        }
      ],
      getJobs : function() {

        return factory.jobs;
      },
      getJob : function(id) {
        var job = {};
        var jobs = factory.getJobs();
        angular.forEach(jobs, function(value, key){
          if(value['id'] == id){
            job = value;
          }
        })
        return job;
      },
      nextID : function(){
         var id = 0;
         var jobs = factory.getJobs();
         angular.forEach(jobs, function(value, key){
           if(value['id'] > id) {
             id = value['id'];
           }
         })
         return id+1;
      },
      putJob : function(newJob) {
        factory.jobs.push(newJob);
      },
      stopJob : function(job) {
        angular.forEach(factory.jobs, function(value, key){
          if(value['id'] == job['id']){
              value['state'] = "Finish";   
          }
        })     
        angular.forEach(job.resources, function(value, key){
          rscFact.changeRSCState(value.id,"Alive");
        })
      },
      suspendJob : function(job) {
        angular.forEach(factory.jobs, function(value, key){
          if(value['id'] == job['id']){
              value['state'] = "Hold";   
          }
        })     
        angular.forEach(job.resources, function(value, key){
          rscFact.changeRSCState(value.id,"Alive");
        })
      },
      startJob : function(job) {
        angular.forEach(factory.jobs, function(value, key){
          if(value['id'] == job['id']){
              value['state'] = "Running";   
          }
        })     
        angular.forEach(job.resources, function(value, key){
          rscFact.changeRSCState(value.id,"Absent");
        })
      },
      rscDeleted : function(id){
        var b;
        angular.forEach(factory.getJobs(), function(value, key){
          b = false;
          angular.forEach(value.resource, function(value2,key2){
            b = b | (value2.id == id);
          })
          if(value['state']!='Finish' && b){
            alert('The job \"'+value['id']+'\" has been stopped !');
            value['state']="Finish";
          }
        })
      },  
      // getStates : function(){
      //   var inprogress = 0; 
      //   var pending = 0; 
      //   var finish = 0;
      //   var states = [];
      //   angular.forEach(factory.jobs,function(value, key){
      //     if(value['state']=='Running'){
      //       inprogress++;
      //     }else if(value['state']=='Pending'){
      //       pending++;
      //     }else if(value['state']=='Finish'){
      //       finish++;
      //     }
      //   })
      //   states.push(Running);
      //   states.push(Pending);
      //   states.push(Finish);
      //   return states;
      // },
      // toString : function(job) {
      //   var name = "name : " + job.name;
      //   var resource = "\nresource : " + job.resource;
      //   var reservation = "\nreservation  : " + job.reservation;
      //   var directory = "\ndirectory : " + job.directory;
      //   var type = "\ntype : " + job.type;
      //   var command = "\ncommand : " + job.command;
      //   var string = name+resource+type+command+reservation+directory;
      //   return string;
      // }
    };
    return factory;
  }])