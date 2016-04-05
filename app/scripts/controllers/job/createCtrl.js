'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('CreateCtrl', ['$scope', 'rscFact', 'TimeFact', 'JobFact', '$rootScope', function ($scope, rscFact, TimeFact, JobFact, $rootScope) {
  	$scope.newJob = {'type' : []};
    $scope.tabn2 = [1];
    $scope.init = function(id){
      $scope.RSC = rscFact.getRSC(id);
      $scope.newJob['reservation']=TimeFact.getDateTenMinutesLater();
      $scope.newJob['resource']="core="+$scope.RSC['core'];
    }
    $scope.addType = function(){
      $scope.tabn2.push($scope.tabn2[$scope.tabn2.length-1]+1);
    }
  	$scope.createJob = function(newJob){
      if('command' in newJob && 'resource' in newJob){
            // var xhr = new XMLHttpRequest();
            // var url = "http://localhost:48080/oarapi-priv/jobs";
            // var params = newJob;
            // xhr.open("POST", url, true);

            // //Send the proper header information along with the request
            // xhr.setRequestHeader("Content-type", "application/json");
            // xhr.setRequestHeader('Access-Control-Allow-Origin','*');
            // xhr.setRequestHeader("Access-Control-Allow-Methods", "POST");
            // xhr.setRequestHeader("Authorization", "Basic " + btoa($rootScope.username+':'+$rootScope.password));

            // xhr.onreadystatechange = function() {//Call a function when the state changes.
            //     if(xhr.readyState == 4 && xhr.status == 200) {
            //         alert(xhr.responseText);
            //     }
            // }
            // xhr.send(params);
      }
      else{
        alert('You have to complete resources and command fields !');
      }
      // var timeOut = newJob['reservation']<TimeFact.getDate();
      // var reservation = newJob.reservation;
      // if(newJob.reservation == ""){ reservation = "None";}
      // if(!timeOut || reservation == 'None'){
      //   var id = JobFact.nextID();
      //   var job =  {
      //     "api_timestamp": 1352707511,
      //     "array_id": id,
      //     "array_index": null,
      //     "command": newJob.command,
      //     "cpuset_name": "kameleon_"+id,
      //     "dependencies": [],
      //     "events": [],
      //     "exit_code": null,
      //     "id": id,
      //     "initial_request": "oarsub "+newJob.command,
      //     "launching_directory": newJob.directory,
      //     "links": [
      //       {
      //         "href": "/oarapi/jobs/"+id,
      //         "rel": "self"
      //       },
      //       {
      //         "href": "/oarapi/jobs/"+id+"/resources",
      //         "rel": "collection",
      //         "title": "resources"
      //       },
      //       {
      //         "href": "/oarapi/jobs/"+id+"/nodes",
      //         "rel": "collection",
      //         "title": "nodes"
      //       }
      //     ],
      //     "message": "Karma = 0.000",
      //     "name": newJob.name,
      //     "nodes": [
      //       {
      //         "api_timestamp": 1352707511,
      //         "links": [
      //           {
      //             "href": "/oarapi/resources/nodes/"+$scope.RSC.network_address,
      //             "rel": "self"
      //           }
      //         ],
      //         "network_address": $scope.RSC.network_address,
      //         "status": "assigned"
      //       }
      //     ],
      //     "owner": "kameleon",
      //     "project": "default",
      //     "properties": "desktop_computing = 'NO'",
      //     "queue": "default",
      //     "reservation": reservation,
      //     "resources": [
      //       {
      //         "api_timestamp": 1352707511,
      //         "id": $scope.RSC.id,
      //         "links": [
      //           {
      //             "href": "/oarapi/resources/"+$scope.RSC.id,
      //             "rel": "self"
      //           },
      //           {
      //             "href": "/oarapi/resources/"+$scope.RSC.id+"/jobs",
      //             "rel": "collection",
      //             "title": "jobs"
      //           }
      //         ],
      //         "status": "assigned"
      //       }
      //     ],
      //     "resubmit_job_id": null,
      //     "scheduled_start": TimeFact.getTime()+1,//faire en fonction de la réservation
      //     "start_time": TimeFact.getTime()+1,//unknown si le job n'a pas commencé
      //     "state": "Running",//a voir en fonction de la reservation
      //     "stderr_file": "OAR.5540.stdout",
      //     "stdout_file": "OAR.5540.stderr",
      //     "stop_time": 0,
      //     "submission_time": TimeFact.getTime(),
      //     "type": "PASSIVE",
      //     "types": [],
      //     "walltime": 7200,
      //     "wanted_resources": "-l \"{type = 'default'}/resource_id=1,walltime=2:0:0\" "//+rscID
      //   }
      //   JobFact.putJob(job);
      //   $scope.newJob = {};      
      //   alert('Job created !'); 
      // }else{
      //   alert('Date of reservation must be in the future');
      // } 
  	}
}]);
