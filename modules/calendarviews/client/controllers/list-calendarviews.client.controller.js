(function() {
  'use strict';

  angular.module('calendarviews').controller('CalendarviewsListController', CalendarviewsListController);

  CalendarviewsListController.$inject = [
    '$scope',
    '$stateParams',
    '$state',
    '$window',
    'Authentication',
    'CalendarviewsService'
  ];

  function CalendarviewsListController($scope, $stateParams, $state, $window, Authentication, CalendarviewsService) {
    var vm = this;
    var entry;
    vm.authentication = Authentication;
    vm.calendarviews = CalendarviewsService.query();
    vm.calendarview = CalendarviewsService.query().$promise.then(function(result) {
      //vm.calendarviews = CalendarviewsService.query();
      //for(var i =0;i<result.length;i++){
      //alert(JSON.stringify(result[0]));
      //alert(result[0]._displayName);
      //alert(result[0]._id._id);
      //alert(result[0]._id);


    });

    $scope.onlyAfter = function(calendar) {
      //console.log(calendar.trainer === vm.authentication.user.username || vm.authentication.user.roles.toString() === 'admin');
      if(calendar.trainer === vm.authentication.user.username || vm.authentication.user.roles.toString() === 'admin'){
        var today = new Date();
        //console.log(Date.parse(calendar.start) +" "+ Date.parse(calendar.start).next().week());
        //console.log(Date.parse(calendar.start) < Date.parse(calendar.start).next().week());
        return Date.parse(calendar.start) > today && Date.parse(calendar.start) < today.next().week();
      }
    };

  }
}());
