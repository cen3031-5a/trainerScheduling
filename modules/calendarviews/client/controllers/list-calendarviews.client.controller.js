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
      var userOnly = [];
      if (vm.authentication.user.roles[0] === 'admin') {
        for (var i = 0; i < result.length; i++) {
          //console.log(result[i].start );
          result[i].start = Date.parse(result[i].start).toISOString();
          result[i].end = Date.parse(result[i].end).toISOString();
        }
        //console.log(vm.authentication.user.roles[0]);
        $scope.data = result;
      } else {
        for (var j = 0; j < result.length; j++) {
          if (vm.authentication.user.username === result[j].trainer) {
            //console.log(result[i].start );
            result[j].start = Date.parse(result[j].start).toISOString();
            result[j].end = Date.parse(result[j].end).toISOString();
            userOnly.push(result[j]);
          }
        }
        $scope.dataCal = userOnly;
      }


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

  function checkTime($scope, $stateParams, $state, $window, Authentication, CalendarviewsService) {
    var c = new Date();
    var nhour = c.getHours();
    var nmin = c.getMinutes();
    var sour = $scope.data;
    var smin = $scope.calendarviews.start;

    if(sour - nhour <= 2) {
      console.log("IT IS TIME TO SEND A MESSAGE!");
    }
    else {
      console.log(c);
      console.log(nhour);
      console.log(nmin);
      console.log(sour);
      console.log(smin);
      console.log($scope.data);
      console.log($scope.start.getHours());
      console.log($scope.start.getMinutes());
      console.log("Please let this work!");
    }
  }
}());

// (function() {
//   'use strict';

//   angular.module('calendarviews').controller('CalendarviewsListController', CalendarviewsListController);

//   CalendarviewsListController.$inject = [
//     '$scope',
//     '$stateParams',
//     '$state',
//     '$window',
//     'Authentication',
//     'CalendarviewsService'
//   ];
//   function checkTime($scope, $stateParams, $state, $window, Authentication, CalendarviewsService) {
//     var vm = this;
//     var c = new Date();
//     var nhour  = c.getHours();
//     var nmin   = c.getMinutes();
//     var sour = $scope.calendarviews.start;
//     var smin = $scope.calendarviews.start;

//     if(sour - nhour <= 2) {
//       console.log("IT IS TIME TO SEND A MESSAGE!");
//     }
//     else {
//       console.log(c);
//       console.log(nhour);
//       console.log(nmin);
//       console.log(sour);
//       console.log(smin);
//       console.log(calendarviews.start);
//       console.log(calendarviews.start.getHours());
//       console.log(calendarviews.start.getMinutes());
//       console.log("Please let this work!");
//     }
//   }
// }());
