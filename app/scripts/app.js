'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])
    .factory('TimeFact', function () {
    var factory = {
      getDate : function() {
        var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();
      var hh = today.getHours();
      var mn = today.getMinutes();
      var ss = today.getSeconds();
      if(dd<10) {  dd='0'+dd  }
      if(mm<10) {  mm='0'+mm  }
      if(hh<10) {  hh='0'+hh  }
      if(mn<10) {  mn='0'+mn  }
      if(ss<10) {  ss='0'+ss  }
      var date = yyyy+'-'+mm+'-'+dd+' '+hh+':'+mn+':'+ss;
        return date;
      }
    };
    return factory;
  })
    .factory('JobFact', function () {
    var factory = {
      jobs : [
        {
          "id" : 1,
          "name" : "job 1",
          "resource" : "core=1,walltime=00:30:00",
          "properties" : "besteffort",
          "command" : "/bin/sleep 1000",
          "reservation" : "2016-03-21 13:44:55",
          "directory" : "/bin"
        },
        {
          "id" : 2,
          "name" : "job 2",
          "resource" : "core=3,walltime=00:30:00",
          "properties" : "besteffort",
          "command" : "/bin/sleep 500",
          "reservation" : "2016-03-11 13:44:55",
          "directory" : "/bin"
        },
        {
          "id" : 3,
          "name" : "job 3",
          "resource" : "core=2,walltime=00:30:00",
          "properties" : "besteffort",
          "command" : "/bin/sleep 3000",
          "reservation" : "2016-03-27 13:44:55",
          "directory" : "/bin"
        },
        {
          "id" : 4,
          "name" : "job 4",
          "resource" : "core=1,walltime=00:30:00",
          "properties" : "besteffort",
          "command" : "/bin/sleep 2000",
          "reservation" : "2016-03-21 13:54:55",
          "directory" : "/bin"
        }
      ],
      getJobs : function() {
        return factory.jobs;
      },
      getJob : function(id) {
        var job = {};
        var jobs = factory.getJobs();
        angular.forEach(jobs, function(value, key){
          if(value.id == id) {
            job = value;
          }
        })
        return job;
      },
      putJob : function(newJob) {
        factory.jobs.push(newJob);
      },
      deleteJob : function(index) {
        factory.jobs.splice(index,1);
      },
      toString : function(job) {
        var name = "name : " + job.name;
        var resource = "\nresource : " + job.resource;
        var reservation = "\nreservation  : " + job.reservation;
        var directory = "\ndirectory : " + job.directory;
        var type = "\ntype : " + job.type;
        var command = "\ncommand : " + job.command;
        var string = name+resource+type+command+reservation+directory;
        return string;
      }
    };
    return factory;
  })
    .factory('NodeFact',[ '$http', function ($http) {
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
              "others" : "besteffort=YES"
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
              "others" : "test2,besteffort=YES"
            }
       },
       {
          "hostname" : "node2",
           "CPU_ID" : 2,
           "Core_ID" : 3,
           "RSC_ID" : 3,
           "Alive" : false,
           "State" : "Free",
           "Properties" : {
              "mem" : 4,
              "others" : "test"
            }
       }
     ],
     newID : function(){
        var id = 0;
        var nodes = factory.getNodes();
        angular.forEach(nodes, function(value, key){
          if(value.id > id) {
            id = value.id;
          }
        })
        return id+1;
     },
     getNodes : function() {
        return factory.nodes;
     },
      getNode : function(id) {
        var node = {};
        var nodes = factory.getNodes();
        angular.forEach(nodes, function(value, key){
          if(value.id == id) {
            node = value;
          }
        })
        return node;
      },
      putNode : function(newNode) {
        factory.nodes.push(newNode);
      },
      deleteNode : function(index) {
        factory.nodes.splice(index,1);
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
        var properties = "\nProperties : " + node.Properties; 
        var string = hostname+cpu+core+rsc+alive+state+properties;
        return string;
      }
    };
    return factory;
  }])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'views/form.html',
        url:'/form'
    })
      .state('dashboard.blank',{
        templateUrl:'views/pages/blank.html',
        url:'/blank'
    })
      .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login'
    })
      .state('dashboard.chart',{
        templateUrl:'views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/chartController.js']
            })
          }
        }
    })
      .state('dashboard.create',{
        templateUrl:'views/create.html',
        url:'/create',
        controller:'CreateCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/create.js']
            })
          }
        }
    })
      .state('dashboard.info',{
        templateUrl:'views/info.html',
        url:'/info',
        controller:'InfoCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/info.js']
            })
          }
        }
    })
      .state('dashboard.add',{
        templateUrl:'views/add.html',
        url:'/add',
        controller:'AddCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/add.js']
            })
          }
        }
    })
      .state('dashboard.table',{
        templateUrl:'views/table.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'views/ui-elements/panels-wells.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'views/ui-elements/buttons.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'views/ui-elements/notifications.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'views/ui-elements/typography.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'views/ui-elements/icons.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'views/ui-elements/grid.html',
       url:'/grid'
   })
  }]);

    