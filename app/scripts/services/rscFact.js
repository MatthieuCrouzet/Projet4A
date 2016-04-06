'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.factory:rscFact
 * @description
 * # rscFact
 * Factory of the sbAdminApp
 */
angular.module('sbAdminApp')
    .factory('rscFact', ['$http', 'TimeFact', '$rootScope',function ($http, TimeFact, $rootScope) {
    var factory = {
      first_time : true,
      resources : [],
      getRSCS : function(){
         var xhr = new XMLHttpRequest();
         xhr.open('GET','http://localhost:48080/oarapi/resources/full.json', false);
         xhr.send();
         if(xhr.status == 200)
            factory.resources = JSON.parse(xhr.responseText).items;
         else alert('It failed !');
        return factory.resources;
      },
      getResources : function() {
        if(factory.first_time){
          factory.first_time = false; 
          return factory.getRSCS();
        }
        else return factory.resources;
      },
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
      changeRSCState : function(rscID, state){
         var resources = factory.getResources();
         angular.forEach(resources, function(value, key){
           if(value['id'] == rscID) {
             value.state = state;
           }
         })


         // $http.put(  "http://localhost:48080/oarapi-priv/resources/"+rscID+"/state", 
         //                {state:state},
         //                {headers:
         //                   {Authorization: "Basic " + btoa($rootScope.username+':'+$rootScope.password)}
         //                })
         // .then(function(res) {
         //    console.log(res);
         // })      
      }
      ,
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
      deleteRSC : function(id) {
        var resources = factory.getResources();
        angular.forEach(resources, function(value,key){
          if(value['id']==id){
            value['state'] = "Dead";
          }
        })
      },
      // toString : function(rsc) {
      //   var time = new Date();
      //   var hostname = "Hostname : " + rsc.network_address;
      //   var id = "\nID : " + rsc.id;
      //   var state = "\nState : "+rsc.state;
      //   var t = "\n\tAvailable upto : "+TimeFact.getDate(rsc.api_timestamp,rsc.available_upto);
      //   var links = "";
      //   angular.forEach(rsc.links, function(value, key){
      //     links = links + "\n\t\tTitle : "+value.title  + "\n\t\tRel : "+value.rel + "\n\t\thref : "+value.href; 
      //   })
      //   var properties = "\nProperties : "+t+"\n\tLinks : "+links;
      //   var string = hostname+id+state+properties;
      //   return string;
      // }
    };
    return factory;
  }])