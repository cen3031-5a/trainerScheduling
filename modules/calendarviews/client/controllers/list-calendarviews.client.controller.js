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
      //}
      //alert(Date.parse('11/10/2017 1:13 PM').toISOString());

      //console.log(vm.authentication.user.roles[0]);
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
        $scope.data = userOnly;
      }

    });

    $scope.onlyAfter = function(calendar) {
      var today = new Date();
      //console.log(today);
      return Date.parse(calendar.start) > today;
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
