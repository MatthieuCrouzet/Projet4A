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
        },
        getDate : function(currentTime, nextTime){
            var date = new Date();
            date.setMilliseconds(date.getMilliseconds()+nextTime-currentTime);
            var dd = date.getDate();
            var mm = date.getMonth()+1; //January is 0!
            var yyyy = date.getFullYear();
            var hh = date.getHours();
            var mn = date.getMinutes();
            var ss = date.getSeconds();
            if(dd<10) {  dd='0'+dd  }
            if(mm<10) {  mm='0'+mm  }
            if(hh<10) {  hh='0'+hh  }
            if(mn<10) {  mn='0'+mn  }
            if(ss<10) {  ss='0'+ss  }
            var str = yyyy+'-'+mm+'-'+dd+' '+hh+':'+mn+':'+ss;
            return str;
        },
        getDateTenMinutesLater : function(){
            var today = new Date();
            today.setMinutes(today.getMinutes()+10);
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            var hh = today.getHours();
            var mn = today.getMinutes()+10;
            var ss = today.getSeconds();
            if(dd<10) {  dd='0'+dd  }
            if(mm<10) {  mm='0'+mm  }
            if(hh<10) {  hh='0'+hh  }
            if(mn<10) {  mn='0'+mn  }
            if(ss<10) {  ss='0'+ss  }
            var date = yyyy+'-'+mm+'-'+dd+' '+hh+':'+mn+':'+ss;
            return date;
        }
      }
    return factory;
  })