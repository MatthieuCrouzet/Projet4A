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
    .factory('JobFact', [ 'NodeFact', '$rootScope', function (NodeFact, $rootScope) {
    var factory = {
      jobs : [
        {
          "name" : "job 1",
          "resource" : "core=1, rsc=1",
          "properties" : "besteffort",
          "command" : "/bin/sleep 1000",
          "reservation" : "2016-03-21 13:44:55",
          "directory" : "/bin",
          "State" : "In progress"
        },
        {
          "name" : "job 2",
          "resource" : "core=1, rsc=1",
          "properties" : "besteffort",
          "command" : "/bin/sleep 500",
          "reservation" : "2016-03-11 13:44:55",
          "directory" : "/bin",
          "State" : "Pending"
        },
        {
          "name" : "job 3",
          "resource" : "core=2, rsc=2",
          "properties" : "besteffort",
          "command" : "/bin/sleep 3000",
          "reservation" : "2016-03-27 13:44:55",
          "directory" : "/bin",
          "State" : "Finish"
        },
        {
          "name" : "job 4",
          "resource" : "core=2, rsc=2",
          "properties" : "besteffort",
          "command" : "/bin/sleep 2000",
          "reservation" : "2016-03-21 13:54:55",
          "directory" : "/bin",
          "State" : "In progress"
        }
      ],
      getJobs : function() {
        return factory.jobs;
      },
      getJob : function(name) {
        var job = {};
        var jobs = factory.getJobs();
        angular.forEach(jobs, function(value, key){
          if(value['name'] == name){
            job = value;
          }
        })
        return job;
      },
      putJob : function(newJob) {
        factory.jobs.push(newJob);
      },
      stopJob : function(job) {
        var r = NodeFact.changeNodeState(job,"Finish");
        angular.forEach(factory.jobs, function(value, key){
          if(value['name'] == job['name']){
            if(r==0){
              value['State'] = "Finish"; 
            } else if(r==2){
              value['State'] = "Finish";
            }         
          }
        })
        return r;     
      },
      suspendJob : function(job) {
        var r = NodeFact.changeNodeState(job,"Free");
        angular.forEach(factory.jobs, function(value, key){
          if(value['name'] == job['name']){
            if(r==0){
              value['State'] = "Pending"; 
            } else if(r==2){
              value['State'] = "Finish";
            }         
          }
        })
        return r; 
      },
      startJob : function(job) {
        var r = NodeFact.changeNodeState(job,"Busy");
        angular.forEach(factory.jobs, function(value, key){
          if(value['name'] == job['name']){
            if(r==0){
              value['State'] = "In progress"; 
            }else if(r==1){
              value['State'] = "Pending";
            } 
            else if(r==2){
              value['State'] = "Finish";
            }         
          }
        })
        return r; 
      },
      nodeDeleted : function(node){
        var core = "core="+node['Core_ID'];
        var rsc = "rsc="+node['RSC_ID'];
        angular.forEach(factory.getJobs(), function(value, key){
          if(value['State']!='Finish' && value['resource'].includes(core) && value['resource'].includes(rsc)){
            alert('The job \"'+value['name']+'\" has been stopped !');
            value['State']="Finish";
          }
        })
      },
      sendJob : function(node){
        $rootScope.RSC = factory.jobs[index];
        factory.startJob(job); 
      },    
      getStates : function(){
        var inprogress = 0; 
        var pending = 0; 
        var finish = 0;
        var states = [];
        angular.forEach(factory.jobs,function(value, key){
          if(value['State']=='In progress'){
            inprogress++;
          }else if(value['State']=='Pending'){
            pending++;
          }else if(value['State']=='Finish'){
            finish++;
          }
        })
        states.push(inprogress);
        states.push(pending);
        states.push(finish);
        return states;
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
  }])
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
                    'scripts/directives/sidebar/sidebar.js'
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
              'scripts/directives/dashboard/stats/stats.js',
              'scripts/directives/node/node.js'
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
                files:['scripts/controllers/createCtrl.js']
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
              name:'chart.js',
              files:[
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
                'scripts/controllers/infoCtrl.js',
                'scripts/directives/job/job.js',
                'scripts/directives/search/search.js'
              ]
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
                files:['scripts/controllers/addCtrl.js']
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

    