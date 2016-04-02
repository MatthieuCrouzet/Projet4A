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
               "network_address" : "node1",
               "links" : [
                  {
                     "href" : "/oarapi/resources.json/resources/nodes/node1",
                     "rel" : "member",
                     "title" : "node"
                  },
                  {
                     "rel" : "self",
                     "href" : "/oarapi/resources.json/resources/1"
                  },
                  {
                     "rel" : "collection",
                     "title" : "jobs",
                     "href" : "/oarapi/resources.json/resources/1/jobs"
                  }
               ],
               "state" : "Alive",
               "api_timestamp" : 1459592799,
               "id" : 1,
               "available_upto" : 2147483647
            },
            {
               "state" : "Alive",
               "links" : [
                  {
                     "title" : "node",
                     "rel" : "member",
                     "href" : "/oarapi/resources.json/resources/nodes/node1"
                  },
                  {
                     "rel" : "self",
                     "href" : "/oarapi/resources.json/resources/2"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/2/jobs",
                     "rel" : "collection",
                     "title" : "jobs"
                  }
               ],
               "network_address" : "node1",
               "available_upto" : 2147483647,
               "id" : 2,
               "api_timestamp" : 1459592799
            },
            {
               "id" : 3,
               "available_upto" : 2147483647,
               "api_timestamp" : 1459592799,
               "state" : "Alive",
               "links" : [
                  {
                     "title" : "node",
                     "rel" : "member",
                     "href" : "/oarapi/resources.json/resources/nodes/node1"
                  },
                  {
                     "rel" : "self",
                     "href" : "/oarapi/resources.json/resources/3"
                  },
                  {
                     "title" : "jobs",
                     "rel" : "collection",
                     "href" : "/oarapi/resources.json/resources/3/jobs"
                  }
               ],
               "network_address" : "node1"
            },
            {
               "links" : [
                  {
                     "title" : "node",
                     "rel" : "member",
                     "href" : "/oarapi/resources.json/resources/nodes/node1"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/4",
                     "rel" : "self"
                  },
                  {
                     "rel" : "collection",
                     "title" : "jobs",
                     "href" : "/oarapi/resources.json/resources/4/jobs"
                  }
               ],
               "state" : "Alive",
               "network_address" : "node1",
               "api_timestamp" : 1459592799,
               "id" : 4,
               "available_upto" : 2147483647
            },
            {
               "id" : 5,
               "available_upto" : 2147483647,
               "api_timestamp" : 1459592799,
               "network_address" : "node2",
               "state" : "Alive",
               "links" : [
                  {
                     "href" : "/oarapi/resources.json/resources/nodes/node2",
                     "rel" : "member",
                     "title" : "node"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/5",
                     "rel" : "self"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/5/jobs",
                     "title" : "jobs",
                     "rel" : "collection"
                  }
               ]
            },
            {
               "links" : [
                  {
                     "href" : "/oarapi/resources.json/resources/nodes/node2",
                     "rel" : "member",
                     "title" : "node"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/6",
                     "rel" : "self"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/6/jobs",
                     "title" : "jobs",
                     "rel" : "collection"
                  }
               ],
               "state" : "Alive",
               "network_address" : "node2",
               "api_timestamp" : 1459592799,
               "available_upto" : 2147483647,
               "id" : 6
            },
            {
               "api_timestamp" : 1459592799,
               "id" : 7,
               "available_upto" : 2147483647,
               "network_address" : "node2",
               "links" : [
                  {
                     "rel" : "member",
                     "title" : "node",
                     "href" : "/oarapi/resources.json/resources/nodes/node2"
                  },
                  {
                     "rel" : "self",
                     "href" : "/oarapi/resources.json/resources/7"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/7/jobs",
                     "title" : "jobs",
                     "rel" : "collection"
                  }
               ],
               "state" : "Alive"
            },
            {
               "api_timestamp" : 1459592799,
               "id" : 8,
               "available_upto" : 2147483647,
               "links" : [
                  {
                     "rel" : "member",
                     "title" : "node",
                     "href" : "/oarapi/resources.json/resources/nodes/node2"
                  },
                  {
                     "rel" : "self",
                     "href" : "/oarapi/resources.json/resources/8"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/8/jobs",
                     "rel" : "collection",
                     "title" : "jobs"
                  }
               ],
               "state" : "Alive",
               "network_address" : "node2"
            },
            {
               "network_address" : "node3",
               "state" : "Alive",
               "links" : [
                  {
                     "href" : "/oarapi/resources.json/resources/nodes/node3",
                     "title" : "node",
                     "rel" : "member"
                  },
                  {
                     "rel" : "self",
                     "href" : "/oarapi/resources.json/resources/9"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/9/jobs",
                     "rel" : "collection",
                     "title" : "jobs"
                  }
               ],
               "id" : 9,
               "available_upto" : 2147483647,
               "api_timestamp" : 1459592799
            },
            {
               "network_address" : "node3",
               "state" : "Alive",
               "links" : [
                  {
                     "title" : "node",
                     "rel" : "member",
                     "href" : "/oarapi/resources.json/resources/nodes/node3"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/10",
                     "rel" : "self"
                  },
                  {
                     "rel" : "collection",
                     "title" : "jobs",
                     "href" : "/oarapi/resources.json/resources/10/jobs"
                  }
               ],
               "id" : 10,
               "available_upto" : 2147483647,
               "api_timestamp" : 1459592799
            },
            {
               "available_upto" : 2147483647,
               "id" : 11,
               "api_timestamp" : 1459592799,
               "state" : "Alive",
               "links" : [
                  {
                     "href" : "/oarapi/resources.json/resources/nodes/node3",
                     "title" : "node",
                     "rel" : "member"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/11",
                     "rel" : "self"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/11/jobs",
                     "title" : "jobs",
                     "rel" : "collection"
                  }
               ],
               "network_address" : "node3"
            },
            {
               "available_upto" : 2147483647,
               "id" : 12,
               "api_timestamp" : 1459592799,
               "network_address" : "node3",
               "state" : "Alive",
               "links" : [
                  {
                     "title" : "node",
                     "rel" : "member",
                     "href" : "/oarapi/resources.json/resources/nodes/node3"
                  },
                  {
                     "rel" : "self",
                     "href" : "/oarapi/resources.json/resources/12"
                  },
                  {
                     "rel" : "collection",
                     "title" : "jobs",
                     "href" : "/oarapi/resources.json/resources/12/jobs"
                  }
               ]
            },
            {
               "links" : [
                  {
                     "href" : "/oarapi/resources.json/resources/nodes/node4",
                     "rel" : "member",
                     "title" : "node"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/13",
                     "rel" : "self"
                  },
                  {
                     "title" : "jobs",
                     "rel" : "collection",
                     "href" : "/oarapi/resources.json/resources/13/jobs"
                  }
               ],
               "state" : "Alive",
               "network_address" : "node4",
               "api_timestamp" : 1459592799,
               "available_upto" : 2147483647,
               "id" : 13
            },
            {
               "api_timestamp" : 1459592799,
               "available_upto" : 2147483647,
               "id" : 14,
               "links" : [
                  {
                     "rel" : "member",
                     "title" : "node",
                     "href" : "/oarapi/resources.json/resources/nodes/node4"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/14",
                     "rel" : "self"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/14/jobs",
                     "title" : "jobs",
                     "rel" : "collection"
                  }
               ],
               "state" : "Alive",
               "network_address" : "node4"
            },
            {
               "available_upto" : 2147483647,
               "id" : 15,
               "api_timestamp" : 1459592799,
               "network_address" : "node4",
               "state" : "Alive",
               "links" : [
                  {
                     "href" : "/oarapi/resources.json/resources/nodes/node4",
                     "rel" : "member",
                     "title" : "node"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/15",
                     "rel" : "self"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/15/jobs",
                     "title" : "jobs",
                     "rel" : "collection"
                  }
               ]
            },
            {
               "network_address" : "node4",
               "links" : [
                  {
                     "rel" : "member",
                     "title" : "node",
                     "href" : "/oarapi/resources.json/resources/nodes/node4"
                  },
                  {
                     "rel" : "self",
                     "href" : "/oarapi/resources.json/resources/16"
                  },
                  {
                     "rel" : "collection",
                     "title" : "jobs",
                     "href" : "/oarapi/resources.json/resources/16/jobs"
                  }
               ],
               "state" : "Alive",
               "api_timestamp" : 1459592799,
               "id" : 16,
               "available_upto" : 2147483647
            },
            {
               "links" : [
                  {
                     "title" : "node",
                     "rel" : "member",
                     "href" : "/oarapi/resources.json/resources/nodes/node5"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/17",
                     "rel" : "self"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/17/jobs",
                     "rel" : "collection",
                     "title" : "jobs"
                  }
               ],
               "state" : "Alive",
               "network_address" : "node5",
               "api_timestamp" : 1459592799,
               "available_upto" : 2147483647,
               "id" : 17
            },
            {
               "available_upto" : 2147483647,
               "id" : 18,
               "api_timestamp" : 1459592799,
               "network_address" : "node5",
               "state" : "Alive",
               "links" : [
                  {
                     "href" : "/oarapi/resources.json/resources/nodes/node5",
                     "rel" : "member",
                     "title" : "node"
                  },
                  {
                     "rel" : "self",
                     "href" : "/oarapi/resources.json/resources/18"
                  },
                  {
                     "rel" : "collection",
                     "title" : "jobs",
                     "href" : "/oarapi/resources.json/resources/18/jobs"
                  }
               ]
            },
            {
               "network_address" : "node5",
               "links" : [
                  {
                     "rel" : "member",
                     "title" : "node",
                     "href" : "/oarapi/resources.json/resources/nodes/node5"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/19",
                     "rel" : "self"
                  },
                  {
                     "href" : "/oarapi/resources.json/resources/19/jobs",
                     "title" : "jobs",
                     "rel" : "collection"
                  }
               ],
               "state" : "Alive",
               "api_timestamp" : 1459592799,
               "available_upto" : 2147483647,
               "id" : 19
            },
            {
               "api_timestamp" : 1459592799,
               "id" : 20,
               "available_upto" : 2147483647,
               "links" : [
                  {
                     "rel" : "member",
                     "title" : "node",
                     "href" : "/oarapi/resources.json/resources/nodes/node5"
                  },
                  {
                     "rel" : "self",
                     "href" : "/oarapi/resources.json/resources/20"
                  },
                  {
                     "rel" : "collection",
                     "title" : "jobs",
                     "href" : "/oarapi/resources.json/resources/20/jobs"
                  }
               ],
               "state" : "Alive",
               "network_address" : "node5"
            }
         ],
      newID : function(){
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
        // $http.get('/app/json/resources.json').then(function(success){
        //   factory.resources = success.data;
        // }, function(error){
        //   console.log('Erreur chargement du fichier resources.json');
        // });
        return factory.resources;
      },
      getRSC : function(id) {
        var rsc = {};
        var resources = factory.getResources();
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