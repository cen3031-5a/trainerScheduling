(function () {
  'use strict';

  // Calendarviews controller
  angular
    .module('calendarviews')
    .controller('CalendarviewsController', CalendarviewsController);

  CalendarviewsController.$inject = ['$scope', '$state', '$window', 'Authentication', 'calendarviewResolve'];

  function CalendarviewsController ($scope, $state, $window, Authentication, calendarview) {
    var vm = this;
    vm.authentication = Authentication;
    vm.calendarview = calendarview;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Calendarview
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.calendarview.$remove();
      }
    }

    // Save Calendarview
    function save(isValid) {
      //console.log(vm.calendarview.end);
      //alert(Date.parse('11/10/2017 1:13 PM').toISOString());
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.calendarviewForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.calendarview._id) {
        vm.calendarview.$update(successCallback, errorCallback);
      } else {
        vm.calendarview.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        //$state.go('calendarviews.list');
        $window.location.href="/calendarviews";
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
