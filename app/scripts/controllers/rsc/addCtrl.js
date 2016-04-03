'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('AddCtrl', ['$scope', 'rscFact', function ($scope, rscFact) {
    $scope.newRSC = {};
    $scope.addRSC = function(newRSC){
    if('network_address' in newRSC && 'cpu' in newRSC && 'core' in newRSC && 'mem' in newRSC){
      if(newRSC.core > 0 && newRSC.cpu > 0 && newRSC.mem > 0 ){
          var nodes = rscFact.getResources();
          var rscExist = false;        
          angular.forEach(nodes, function(value, key){
            rscExist = rscExist || (value['core'] == newRSC.core && value['network_address'] == newRSC.network_address && value['cpu'] == newRSC.cpu);
          })
          if(!rscExist){
            var id = rscFact.nextID();
            if(!newRSC.type){ newRSC.type = "default";}
            var RSC = {
              "id" : id,
              "besteffort" : newRSC.besteffort,
              "network_address" : newRSC.network_address,
              "host" : newRSC.network_address,
              "cpu" : newRSC.cpu,
              "core" : newRSC.core,
              "scheduler_priority" : 0,
              "last_available_upto" : 0,
              "api_timestamp" : 1459691336,
              "available_upto" : 2147483647,
              "next_finaud_decision" : "NO",
              "state" : "Alive",
              "last_job_date" : 0,
              "desktop_computing" : "NO",
              "host" : "node1",
              "drain" : "NO",
              "links" : [
                  {
                     "href" : "/oarapi-priv/resources/details.json/resources/nodes/"+newRSC.network_address,
                     "title" : "node",
                     "rel" : "member"
                  },
                  {
                     "href" : "/oarapi-priv/resources/details.json/resources/"+id,
                     "rel" : "self"
                  },
                  {
                     "title" : "jobs",
                     "href" : "/oarapi-priv/resources/details.json/resources/"+id+"/jobs",
                     "rel" : "collection"
                  }
               ],
              "state_num" : 1,
              "finaud_decision" : "NO",
              "expiry_date" : 0,
              "suspended_jobs" : "NO",
              "cpuset" : id-1,
              "deploy" : "NO",
              "mem" : newRSC.mem,
              "next_state" : "UnChanged",
              "type" : "default",
            };
            rscFact.putRSC(RSC);
            alert('Resource created !')
          }else{
            alert('Resource already exists !');
          }
        }else{
          alert('CPU ID, CORE ID and MEM must be integer !');
        }
      }else{
        alert('You have to complete all fields !');
      }
    };
}]);
