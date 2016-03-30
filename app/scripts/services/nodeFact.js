'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.factory:NodeFact
 * @description
 * # NodeFact
 * Factory of the sbAdminApp
 */
angular.module('sbAdminApp')
    .factory('NodeFact', ['$http', function ($http) {
    var factory = {
      nodes : [
         {
             "hostname" : "node1",
             "CPU_ID" : 1,
             "Core_ID" : 1,
             "Alive" : true,
             "State" : "Free",
             "Properties" : {
                "mem" : 4,
                "besteffort" : true,
                "others" : ""
              }
         },
         {
             "hostname" : "node1",
             "CPU_ID" : 1,
             "Core_ID" : 2,
             "Alive" : true,
             "State" : "Free",
             "Properties" : {
                "mem" : 8,
                "besteffort" : true,
                "others" : ""
              }
         },
         {
            "hostname" : "node2",
             "CPU_ID" : 2,
             "Core_ID" : 3,
             "Alive" : true,
             "State" : "Free",
             "Properties" : {
                "mem" : 4,
                "besteffort" : false,
                "others" : ""
              }
         },
        {
            "hostname" : "node2",
             "CPU_ID" : 2,
             "Core_ID" : 4,
             "Alive" : true,
             "State" : "Free",
             "Properties" : {
                "mem" : 4,
                "besteffort" : false,
                "others" : ""
              }
         },
         {
            "hostname" : "node2",
             "CPU_ID" : 2,
             "Core_ID" : 5,
             "Alive" : true,
             "State" : "Free",
             "Properties" : {
                "mem" : 4,
                "besteffort" : false,
                "others" : ""
              }
         },
         {
            "hostname" : "node3",
             "CPU_ID" : 3,
             "Core_ID" : 6,
             "Alive" : true,
             "State" : "Free",
             "Properties" : {
                "mem" : 4,
                "besteffort" : false,
                "others" : ""
              }
         }
      ],
      newID : function(){
         var id = 0;
         var nodes = factory.getNodes();
         angular.forEach(nodes, function(value, key){
           if(value['Core_ID'] > id) {
             id = value['Core_ID'];
           }
         })
         return id+1;
      },
      changeNodeState : function(job, state){
        var core = "";
        var rsc = "";
        var r = -1;
        angular.forEach(factory.nodes, function(value, key){
          core = "core="+value['Core_ID'];
          if(job['resource'].includes(core)){
            if(value['State']!='Dead'){
              if(value['State']==state){
                alert('This resource is already '+state);
                r = 1;
              }else {
                value['State'] = state;
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
      getNodes : function() {
        // $http.get('/app/json/nodes.json').then(function(success){
        //   factory.nodes = success.data;
        // }, function(error){
        //   console.log('Erreur chargement du fichier nodes.json');
        // });
        return factory.nodes;
      },
      getNode : function(id) {
        var node = {};
        var nodes = factory.getNodes();
        angular.forEach(nodes, function(value,key){
          if(value['Core_ID']==id){
            node = value;
          }
        })
        return node;
      },
      putNode : function(newNode) {
        factory.nodes.push(newNode);
      },
      deleteNode : function(index) {
        factory.nodes[index]['Alive'] = false;
        factory.nodes[index]['State'] = "Dead";
      },
      toString : function(node) {
        var hostname = "hostname : " + node.hostname;
        var cpu = "\nCPU_ID : " + node.CPU_ID;
        var core = "\nCore_ID : " + node.Core_ID;
        var alive; 
        if(node.Alive){
          alive = "\nIs alive : true";
        }else{
          alive = "\nIs alive : false";
        } 
        var state = "\nState : " + node.State;
        var properties = "";
        if(node['Properties']['besteffort']==false){
          properties = "\nProperties : \n\tType : No specified\n\tMemory : " + node['Properties']['mem'] + "\n\tOthers : " + node['Properties']['others'];
        }else{ 
         properties = "\nProperties : \n\tType : Besteffort\n\tMemory : " + node['Properties']['mem'] + "\n\tOthers : " + node['Properties']['others'];
        }
        var string = hostname+cpu+core+alive+state+properties;
        return string;
      }
    };
    return factory;
  }])