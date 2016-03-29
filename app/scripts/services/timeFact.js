'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.factory:TimeFact
 * @description
 * # TimeFact
 * Factory of the sbAdminApp
 */
angular.module('sbAdminApp')
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