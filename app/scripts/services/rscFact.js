'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.factory:rscFact
 * @description
 * # rscFact
 * Factory of the sbAdminApp
 */
angular.module('sbAdminApp')
    .factory('rscFact', ['$http', 'TimeFact', function ($http, TimeFact) {
    var factory = {
      resources : [
               {
                  "state_num" : 1,
                  "last_job_date" : 0,
                  "next_finaud_decision" : "NO",
                  "mem" : 4,
                  "network_address" : "node1",
                  "drain" : "NO",
                  "links" : [
                     {
                        "href" : "/oarapi/resources/details.json/resources/nodes/node1",
                        "title" : "node",
                        "rel" : "member"
                     },
                     {
                        "href" : "/oarapi/resources/details.json/resources/1",
                        "rel" : "self"
                     },
                     {
                        "rel" : "collection",
                        "title" : "jobs",
                        "href" : "/oarapi/resources/details.json/resources/1/jobs"
                     }
                  ],
                  "cpu" : 1,
                  "suspended_jobs" : "NO",
                  "expiry_date" : 0,
                  "deploy" : "NO",
                  "id" : 1,
                  "host" : "node1",
                  "type" : "default",
                  "scheduler_priority" : 0,
                  "besteffort" : "YES",
                  "core" : 1,
                  "last_available_upto" : 0,
                  "next_state" : "UnChanged",
                  "api_timestamp" : 1459689646,
                  "desktop_computing" : "NO",
                  "cpuset" : 0,
                  "finaud_decision" : "NO",
                  "state" : "Alive",
                  "available_upto" : 2147483647
               },
               {
                  "core" : 2,
                  "last_available_upto" : 0,
                  "besteffort" : "YES",
                  "scheduler_priority" : 0,
                  "type" : "default",
                  "api_timestamp" : 1459689646,
                  "next_state" : "UnChanged",
                  "desktop_computing" : "NO",
                  "cpuset" : 1,
                  "available_upto" : 2147483647,
                  "finaud_decision" : "NO",
                  "state" : "Alive",
                  "drain" : "NO",
                  "next_finaud_decision" : "NO",
                  "mem" : 4,
                  "network_address" : "node1",
                  "last_job_date" : 0,
                  "state_num" : 1,
                  "expiry_date" : 0,
                  "suspended_jobs" : "NO",
                  "cpu" : 1,
                  "links" : [
                     {
                        "rel" : "member",
                        "href" : "/oarapi/resources/details.json/resources/nodes/node1",
                        "title" : "node"
                     },
                     {
                        "href" : "/oarapi/resources/details.json/resources/2",
                        "rel" : "self"
                     },
                     {
                        "title" : "jobs",
                        "href" : "/oarapi/resources/details.json/resources/2/jobs",
                        "rel" : "collection"
                     }
                  ],
                  "id" : 2,
                  "deploy" : "NO",
                  "host" : "node1"
               },
               {
                  "desktop_computing" : "NO",
                  "cpuset" : 2,
                  "state" : "Alive",
                  "finaud_decision" : "NO",
                  "available_upto" : 2147483647,
                  "scheduler_priority" : 0,
                  "type" : "default",
                  "besteffort" : "YES",
                  "last_available_upto" : 0,
                  "core" : 3,
                  "next_state" : "UnChanged",
                  "api_timestamp" : 1459689646,
                  "deploy" : "NO",
                  "id" : 3,
                  "host" : "node1",
                  "state_num" : 1,
                  "last_job_date" : 0,
                  "mem" : 4,
                  "next_finaud_decision" : "NO",
                  "network_address" : "node1",
                  "drain" : "NO",
                  "links" : [
                     {
                        "href" : "/oarapi/resources/details.json/resources/nodes/node1",
                        "title" : "node",
                        "rel" : "member"
                     },
                     {
                        "rel" : "self",
                        "href" : "/oarapi/resources/details.json/resources/3"
                     },
                     {
                        "rel" : "collection",
                        "href" : "/oarapi/resources/details.json/resources/3/jobs",
                        "title" : "jobs"
                     }
                  ],
                  "cpu" : 1,
                  "suspended_jobs" : "NO",
                  "expiry_date" : 0
               },
               {
                  "host" : "node1",
                  "deploy" : "NO",
                  "id" : 4,
                  "links" : [
                     {
                        "href" : "/oarapi/resources/details.json/resources/nodes/node1",
                        "title" : "node",
                        "rel" : "member"
                     },
                     {
                        "rel" : "self",
                        "href" : "/oarapi/resources/details.json/resources/4"
                     },
                     {
                        "title" : "jobs",
                        "href" : "/oarapi/resources/details.json/resources/4/jobs",
                        "rel" : "collection"
                     }
                  ],
                  "cpu" : 1,
                  "suspended_jobs" : "NO",
                  "expiry_date" : 0,
                  "state_num" : 1,
                  "last_job_date" : 0,
                  "network_address" : "node1",
                  "mem" : 4,
                  "next_finaud_decision" : "NO",
                  "drain" : "NO",
                  "finaud_decision" : "NO",
                  "state" : "Alive",
                  "available_upto" : 2147483647,
                  "desktop_computing" : "NO",
                  "cpuset" : 3,
                  "next_state" : "UnChanged",
                  "api_timestamp" : 1459689646,
                  "scheduler_priority" : 0,
                  "type" : "default",
                  "besteffort" : "YES",
                  "core" : 4,
                  "last_available_upto" : 0
               },
               {
                  "desktop_computing" : "NO",
                  "cpuset" : 0,
                  "available_upto" : 2147483647,
                  "finaud_decision" : "NO",
                  "state" : "Alive",
                  "scheduler_priority" : 0,
                  "type" : "default",
                  "last_available_upto" : 0,
                  "core" : 1,
                  "besteffort" : "YES",
                  "next_state" : "UnChanged",
                  "api_timestamp" : 1459689646,
                  "deploy" : "NO",
                  "id" : 5,
                  "host" : "node2",
                  "last_job_date" : 0,
                  "state_num" : 1,
                  "drain" : "NO",
                  "mem" : 4,
                  "network_address" : "node2",
                  "next_finaud_decision" : "NO",
                  "links" : [
                     {
                        "href" : "/oarapi/resources/details.json/resources/nodes/node2",
                        "title" : "node",
                        "rel" : "member"
                     },
                     {
                        "rel" : "self",
                        "href" : "/oarapi/resources/details.json/resources/5"
                     },
                     {
                        "rel" : "collection",
                        "title" : "jobs",
                        "href" : "/oarapi/resources/details.json/resources/5/jobs"
                     }
                  ],
                  "expiry_date" : 0,
                  "cpu" : 2,
                  "suspended_jobs" : "NO"
               },
               {
                  "finaud_decision" : "NO",
                  "state" : "Alive",
                  "available_upto" : 2147483647,
                  "desktop_computing" : "NO",
                  "cpuset" : 1,
                  "api_timestamp" : 1459689646,
                  "next_state" : "UnChanged",
                  "besteffort" : "YES",
                  "last_available_upto" : 0,
                  "core" : 2,
                  "scheduler_priority" : 0,
                  "type" : "default",
                  "host" : "node2",
                  "id" : 6,
                  "deploy" : "NO",
                  "suspended_jobs" : "NO",
                  "cpu" : 2,
                  "expiry_date" : 0,
                  "links" : [
                     {
                        "rel" : "member",
                        "href" : "/oarapi/resources/details.json/resources/nodes/node2",
                        "title" : "node"
                     },
                     {
                        "href" : "/oarapi/resources/details.json/resources/6",
                        "rel" : "self"
                     },
                     {
                        "rel" : "collection",
                        "title" : "jobs",
                        "href" : "/oarapi/resources/details.json/resources/6/jobs"
                     }
                  ],
                  "mem" : 4,
                  "network_address" : "node2",
                  "next_finaud_decision" : "NO",
                  "drain" : "NO",
                  "state_num" : 1,
                  "last_job_date" : 0
               },
               {
                  "drain" : "NO",
                  "next_finaud_decision" : "NO",
                  "mem" : 4,
                  "network_address" : "node2",
                  "last_job_date" : 0,
                  "state_num" : 1,
                  "expiry_date" : 0,
                  "suspended_jobs" : "NO",
                  "cpu" : 2,
                  "links" : [
                     {
                        "rel" : "member",
                        "title" : "node",
                        "href" : "/oarapi/resources/details.json/resources/nodes/node2"
                     },
                     {
                        "rel" : "self",
                        "href" : "/oarapi/resources/details.json/resources/7"
                     },
                     {
                        "href" : "/oarapi/resources/details.json/resources/7/jobs",
                        "title" : "jobs",
                        "rel" : "collection"
                     }
                  ],
                  "id" : 7,
                  "deploy" : "NO",
                  "host" : "node2",
                  "core" : 3,
                  "last_available_upto" : 0,
                  "besteffort" : "YES",
                  "scheduler_priority" : 0,
                  "type" : "default",
                  "api_timestamp" : 1459689646,
                  "next_state" : "UnChanged",
                  "desktop_computing" : "NO",
                  "cpuset" : 2,
                  "available_upto" : 2147483647,
                  "finaud_decision" : "NO",
                  "state" : "Alive"
               },
               {
                  "id" : 8,
                  "deploy" : "NO",
                  "host" : "node2",
                  "drain" : "NO",
                  "mem" : 4,
                  "next_finaud_decision" : "NO",
                  "network_address" : "node2",
                  "last_job_date" : 0,
                  "state_num" : 1,
                  "expiry_date" : 0,
                  "suspended_jobs" : "NO",
                  "cpu" : 2,
                  "links" : [
                     {
                        "title" : "node",
                        "href" : "/oarapi/resources/details.json/resources/nodes/node2",
                        "rel" : "member"
                     },
                     {
                        "href" : "/oarapi/resources/details.json/resources/8",
                        "rel" : "self"
                     },
                     {
                        "rel" : "collection",
                        "title" : "jobs",
                        "href" : "/oarapi/resources/details.json/resources/8/jobs"
                     }
                  ],
                  "desktop_computing" : "NO",
                  "cpuset" : 3,
                  "available_upto" : 2147483647,
                  "finaud_decision" : "NO",
                  "state" : "Alive",
                  "last_available_upto" : 0,
                  "core" : 4,
                  "besteffort" : "YES",
                  "scheduler_priority" : 0,
                  "type" : "default",
                  "api_timestamp" : 1459689646,
                  "next_state" : "UnChanged"
               },
               {
                  "state_num" : 1,
                  "last_job_date" : 0,
                  "mem" : 4,
                  "next_finaud_decision" : "NO",
                  "network_address" : "node3",
                  "drain" : "NO",
                  "links" : [
                     {
                        "rel" : "member",
                        "title" : "node",
                        "href" : "/oarapi/resources/details.json/resources/nodes/node3"
                     },
                     {
                        "rel" : "self",
                        "href" : "/oarapi/resources/details.json/resources/9"
                     },
                     {
                        "rel" : "collection",
                        "title" : "jobs",
                        "href" : "/oarapi/resources/details.json/resources/9/jobs"
                     }
                  ],
                  "cpu" : 3,
                  "suspended_jobs" : "NO",
                  "expiry_date" : 0,
                  "deploy" : "NO",
                  "id" : 9,
                  "host" : "node3",
                  "scheduler_priority" : 0,
                  "type" : "default",
                  "besteffort" : "YES",
                  "last_available_upto" : 0,
                  "core" : 1,
                  "next_state" : "UnChanged",
                  "api_timestamp" : 1459689646,
                  "desktop_computing" : "NO",
                  "cpuset" : 0,
                  "state" : "Alive",
                  "finaud_decision" : "NO",
                  "available_upto" : 2147483647
               },
               {
                  "next_state" : "UnChanged",
                  "api_timestamp" : 1459689646,
                  "scheduler_priority" : 0,
                  "type" : "default",
                  "core" : 2,
                  "last_available_upto" : 0,
                  "besteffort" : "YES",
                  "available_upto" : 2147483647,
                  "state" : "Alive",
                  "finaud_decision" : "NO",
                  "desktop_computing" : "NO",
                  "cpuset" : 1,
                  "links" : [
                     {
                        "title" : "node",
                        "href" : "/oarapi/resources/details.json/resources/nodes/node3",
                        "rel" : "member"
                     },
                     {
                        "href" : "/oarapi/resources/details.json/resources/10",
                        "rel" : "self"
                     },
                     {
                        "href" : "/oarapi/resources/details.json/resources/10/jobs",
                        "title" : "jobs",
                        "rel" : "collection"
                     }
                  ],
                  "expiry_date" : 0,
                  "suspended_jobs" : "NO",
                  "cpu" : 3,
                  "last_job_date" : 0,
                  "state_num" : 1,
                  "drain" : "NO",
                  "mem" : 4,
                  "network_address" : "node3",
                  "next_finaud_decision" : "NO",
                  "host" : "node3",
                  "deploy" : "NO",
                  "id" : 10
               },
               {
                  "state" : "Alive",
                  "finaud_decision" : "NO",
                  "available_upto" : 2147483647,
                  "desktop_computing" : "NO",
                  "cpuset" : 2,
                  "api_timestamp" : 1459689646,
                  "next_state" : "UnChanged",
                  "besteffort" : "YES",
                  "last_available_upto" : 0,
                  "core" : 3,
                  "scheduler_priority" : 0,
                  "type" : "default",
                  "host" : "node3",
                  "id" : 11,
                  "deploy" : "NO",
                  "suspended_jobs" : "NO",
                  "cpu" : 3,
                  "expiry_date" : 0,
                  "links" : [
                     {
                        "href" : "/oarapi/resources/details.json/resources/nodes/node3",
                        "title" : "node",
                        "rel" : "member"
                     },
                     {
                        "rel" : "self",
                        "href" : "/oarapi/resources/details.json/resources/11"
                     },
                     {
                        "href" : "/oarapi/resources/details.json/resources/11/jobs",
                        "title" : "jobs",
                        "rel" : "collection"
                     }
                  ],
                  "network_address" : "node3",
                  "mem" : 4,
                  "next_finaud_decision" : "NO",
                  "drain" : "NO",
                  "state_num" : 1,
                  "last_job_date" : 0
               },
               {
                  "available_upto" : 2147483647,
                  "state" : "Alive",
                  "finaud_decision" : "NO",
                  "desktop_computing" : "NO",
                  "cpuset" : 3,
                  "next_state" : "UnChanged",
                  "api_timestamp" : 1459689646,
                  "scheduler_priority" : 0,
                  "type" : "default",
                  "core" : 4,
                  "last_available_upto" : 0,
                  "besteffort" : "YES",
                  "host" : "node3",
                  "deploy" : "NO",
                  "id" : 12,
                  "links" : [
                     {
                        "href" : "/oarapi/resources/details.json/resources/nodes/node3",
                        "title" : "node",
                        "rel" : "member"
                     },
                     {
                        "href" : "/oarapi/resources/details.json/resources/12",
                        "rel" : "self"
                     },
                     {
                        "href" : "/oarapi/resources/details.json/resources/12/jobs",
                        "title" : "jobs",
                        "rel" : "collection"
                     }
                  ],
                  "expiry_date" : 0,
                  "cpu" : 3,
                  "suspended_jobs" : "NO",
                  "last_job_date" : 0,
                  "state_num" : 1,
                  "drain" : "NO",
                  "network_address" : "node3",
                  "mem" : 4,
                  "next_finaud_decision" : "NO"
               }
            ],
      nextID : function(){
         var id = 0;
         var resources = factory.getResources();
         angular.forEach(resources, function(value, key){
           if(value['id'] > id) {
             id = value['id'];
           }
         })
         return id+1;
      },
      changeRSCState : function(job, state){
        var core = "";
        var rsc = "";
        var r = -1;
        angular.forEach(factory.resources, function(value, key){
          core = "core="+value['id'];
          if(job['resource'].includes(core)){
            if(value['state']!='Dead'){
              if(value['state']==state){
                alert('This resource is already '+state);
                r = 1;
              }else {
                value['state'] = state;
                r = 0;
              }
            }else{
              alert('This resource is Dead');
              r = 2;
            }
          }
        })
        return r;
      },
      getResources : function() {
        //  $.ajax({
        //     type: "GET",
        //     url: "http://localhost:48080/oarapi/resources.json",
        //     dataType: "jsonp",
        //     success: function (xml) {
        //         factory.resources = xml.items;
        //     },
        // });
    // $.getJSON('http://localhost:48080/oarapi/resources.json?callback=?', true, function(data) {
    //     alert(data);
    // });
        return factory.resources;
      },
      getRSC : function(id) {
        var rsc = {};
        var resources = factory.resources;
        angular.forEach(resources, function(value,key){
          if(value['id']==id){
            rsc = value;
          }
        })
        return rsc;
      },
      putRSC : function(newrsc) {
        factory.resources.push(newrsc);
      },
      deleteRSC : function(index) {
        factory.resources[index]['state'] = "Dead";
      },
      toString : function(rsc) {
        var time = new Date();
        var hostname = "Hostname : " + rsc.network_address;
        var id = "\nID : " + rsc.id;
        var state = "\nState : "+rsc.state;
        var t = "\n\tAvailable upto : "+TimeFact.getDate(rsc.api_timestamp,rsc.available_upto);
        var links = "";
        angular.forEach(rsc.links, function(value, key){
          links = links + "\n\t\tTitle : "+value.title  + "\n\t\tRel : "+value.rel + "\n\t\thref : "+value.href; 
        })
        var properties = "\nProperties : "+t+"\n\tLinks : "+links;
        var string = hostname+id+state+properties;
        return string;
      }
    };
    return factory;
  }])