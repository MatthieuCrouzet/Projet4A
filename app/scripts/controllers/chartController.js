'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ChartCtrl', ['$scope', '$timeout', '$http',  function ($scope, $http, $timeout) {
    
    $scope.created = false;
    $scope.newChart = {};
    $scope.lastCreated = {};

    //$scope.charts = ChartFact.getCharts();
    $scope.charts = [
          {
              "displayed" : true,
              "id" : 1,
              "name" : "Line Chart",
              "type" : "Line",
            "labels": ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            "series": ['Series A', 'Series B'],
            "data": [
              [65, 59, 80, 81, 56, 55, 40],
              [28, 48, 40, 19, 86, 27, 90]
            ],
            "onClick": function (points, evt) {
              console.log(points, evt);
            }
          },

          {
              "displayed" : true,
              "id" : 2,
              "name" : "Bar Chart",
              "type" : "Bar",
            "labels": ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
          "series": ['Series A', 'Series B'],

          "data": [
             [65, 59, 80, 81, 56, 55, 40],
             [28, 48, 40, 19, 86, 27, 90]
          ]
            
          },
          {
              "displayed" : true,
              "id" : 3,
              "name" : "Doughnut Chart",
              "type" : "Doughnut",
              "labels": ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
              "data": [300, 500, 100]
          },
          {
              "displayed" : true,
              "id" : 4,
              "name" : "Radar Chart",
              "type" : "Radar",
            "labels":["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],

            "data":[
                [65, 59, 90, 81, 56, 55, 40],
                [28, 48, 40, 19, 96, 27, 100]
            ]
          },
          {
              "displayed" : true,
              "id" : 5,
              "name" : "Pie Chart",
              "type" : "Pie",
            "labels" : ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
            "data" : [300, 500, 100]
          },
          {
              "displayed" : true,
              "id" : 6,
              "name" : "PolarArea Chart",
              "type" : "PolarArea",
            "labels" : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
            "data" : [300, 500, 100, 40, 120]
          }
      ];
    // $scope.charts = $http.get('all_chart.json').then( 
    //     function() { alert('Success');},
    //     function() { alert('Failed'); }
    //     );
//     $scope.newChart = {};

//     ChartFact.get($routeParams.id).then(function(chart){}, function(){ alert("Il y a eu une erreur"); });

    $scope.deleteChart = function(id){
      $scope.charts.splice(id,1);
    };

    $scope.create = function(){
      if($scope.newChart.name != null && $scope.newChart.id != null && $scope.newChart.type != null){
        $scope.newChart.displayed = true;
        $scope.charts.push($scope.newChart);
        $scope.lastCreated = $scope.newChart;
        $scope.newChart = {};
        $scope.created = true;
      }
    }
//     $scope.addChart = function(newChart){
//       $scope.charts.push(newChart);
//       ChartFact.add(newChart);
//     }

// }])
//   .factory('ChartFact',['$http' , function($http){
//       var factory = {
//         getCharts : function(){
//           return $http.get('all_chart.json');
//         },
//         getChart : function(id){
//           var chart = {};
//           var charts = getCharts();
//           angular.forEach(charts, function(value, key){
//             if (value.id = id){
//               chart = value;
//             }
//           });
//           return chart;
//         },
//         delete : function(id){
//           var chart = {};
//           angular.forEach(factory.charts, function(value, key){
//             if (value.id = id){
//               chart = value;
//             }
//           });
//           factory.charts.splice(factory.charts.indexOf(chart),1);
//         },
//         add : function(newChart){
//           factory.charts.push(newChart);
//         }
//       }
  }]);
