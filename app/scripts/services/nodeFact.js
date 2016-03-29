'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.factory:NodeFact
 * @description
 * # NodeFact
 * Factory of the sbAdminApp
 */
angular.module('sbAdminApp')
    .factory('NodeFact', [function () {
    var factory = {
      nodes : [
         {
             "hostname" : "node1",
             "CPU_ID" : 1,
             "Core_ID" : 1,
             "RSC_ID" : 1,
             "Alive" : true,
             "State" : "Busy",
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
             "RSC_ID" : 2,
             "Alive" : true,
             "State" : "Free",
             "Properties" : {
                "mem" : 8,
                "besteffort" : true,
                "others" : "test2"
              }
         },
         {
            "hostname" : "node2",
             "CPU_ID" : 2,
             "Core_ID" : 3,
             "RSC_ID" : 3,
             "Alive" : false,
             "State" : "Dead",
             "Properties" : {
                "mem" : 4,
                "besteffort" : false,
                "others" : "test"
              }
         }
      ],
      newID : function(){
         var id = 0;
         var nodes = factory.getNodes();
         angular.forEach(nodes, function(value, key){
           if(value['RSC_ID'] > id) {
             id = value['RSC_ID'];
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
          rsc = "rsc="+value['RSC_ID'];
          if(job['resource'].includes(core) && job['resource'].includes(rsc)){
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
         return factory.nodes;
      },
      getNode : function(index) {
        var node = {};
        var nodes = factory.getNodes();
        return nodes[index];
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
        var rsc = "\nRSC_ID : " + node.RSC_ID;
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
        var string = hostname+cpu+core+rsc+alive+state+properties;
        return string;
      }
    };
    return factory;
  }])