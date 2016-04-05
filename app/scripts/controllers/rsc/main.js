'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', ['$scope', '$rootScope', 'rscFact', 'JobFact', function($scope, $rootScope, rscFact, JobFact) {
    // $scope.pie = {
    //   "labels" : ['Alive', 'Dead'],
    //   "data" : [20,0]
    // };
    //
    // $scope.$watchCollection("resources", function( newValue, oldValue ) {
    //   var i = 0;
    //   var nb_alive = 0;
    //   angular.forEach(newValue, function(value, key){
    //     if(value.state=='Alive'){
    //       nb_alive++; i++;
    //     }
    //   })
    //        $scope.pie.data = [
    //           nb_alive,
    //           i-nb_alive
    //        ];
    //     }
    // );

    $scope.order = function(elem){
      return elem['network_address'];
    }
    $scope.test = function(index){
      rscFact.changeRSCState(index,"Dead");
    }
    $scope.deleteRSC = function(index){
      var r = confirm("Are you sure you want to delete this resource?")
      if(r==true){
        rscFact.deleteRSC(index);
        JobFact.rscDeleted(rscFact.getRSC(index))
        alert('This resource have been deleted');
      }
      else {
        alert('The resource wasn\'t deleted !');
      }
    };
    $scope.resources = rscFact.getResources();
    
  }]);