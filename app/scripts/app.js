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
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/search/search.js',
                    'scripts/services/timeFact.js',
                    'scripts/services/rscFact.js',
                    'scripts/services/jobFact.js'
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
        templateUrl:'views/rsc/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/controllers/job/createCtrl.js'
              ]
            })
          }
        }
      })
      .state('dashboard.create',{
        templateUrl:'views/job/create.html',
        url:'/create',
        controller:'CreateCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/job/createCtrl.js']
            })
          }
        }
    })
      .state('dashboard.info',{
        templateUrl:'views/job/info.html',
        url:'/resources',
        controller:'InfoCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
                'scripts/controllers/job/infoCtrl.js',
                'scripts/directives/job/job.js'
              ]
            })
          }
        }
    })
      .state('dashboard.add',{
        templateUrl:'views/rsc/add.html',
        url:'/add',
        controller:'AddCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/rsc/addCtrl.js']
            })
          }
        }
    })
      .state('dashboard.infoRSC',{
       templateUrl:'views/dashboard/detail.html',
       url:'/resources/detail/id={core}',
       controller:'DetailCtrl',
       resolve: {
          loadMyFile:function($ocLazyLoad) {
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/detailCtrl.js']
            })
          }
        }
   })
      .state('dashboard.infoJob',{
       templateUrl:'views/dashboard/detail.html',
       url:'/jobs/detail/id={core}',
       controller:'DetailCtrl',
       resolve: {
          loadMyFile:function($ocLazyLoad) {
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/detailCtrl.js']
            })
          }
        }
   })
  }]);

    