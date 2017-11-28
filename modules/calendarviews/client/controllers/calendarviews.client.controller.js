(function() {
  'use strict';

  // Calendarviews controller
  angular.module('calendarviews').controller('CalendarviewsController', CalendarviewsController);

  CalendarviewsController.$inject = ['$scope', '$state', '$window', 'Authentication', 'calendarviewResolve'];

  function CalendarviewsController($scope, $state, $window, Authentication, calendarview) {
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
        //$state.go('calendarviews.list')
        $window.location.href = "/calendarviews";
      }
    }

    // Save Calendarview
    function save(isValid) {
      //console.log(vm.calendarview.start);
      //alert(Date.parse('11/10/2017 1:13 PM').toISOString());
      //vm.calendarview.repeat='12/15/2017 1:13 PM';

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.calendarviewForm');
        return false;
      }

      if(!vm.calendarview.repeat){
        // TODO: move create/update logic to service
        if (vm.calendarview._id) {
          vm.calendarview.$update(successCallback, errorCallback);
        } else {
          vm.calendarview.$save(successCallback, errorCallback);
        }
      }
      else{
        // TODO: move create/update logic to service
        var startTmp =vm.calendarview.start;
        var endTmp = vm.calendarview.end;
        var tmp = new Date();
        tmp = Date.parse(vm.calendarview.start);

        while(tmp<Date.parse(vm.calendarview.repeat)){
          vm.calendarview.start = startTmp;
          vm.calendarview.end = endTmp;
          if (vm.calendarview._id) {
            vm.calendarview.$update(successCallback, errorCallback);
          } else {
            vm.calendarview.$save(successCallback, errorCallback);
            console.log(vm.calendarview._id+" "+tmp + " "+startTmp +" "+ endTmp + " "+vm.calendarview.start+ " "+vm.calendarview.end);

          }
          //console.log(vm.calendarview._id+" "+tmp + " "+startTmp +" "+ endTmp);
          tmp = tmp.next().week();
          startTmp = tmp.toString('M/d/yyyy h:mm tt');
          endTmp = Date.parse(endTmp).next().week().toString('M/d/yyyy h:mm tt');

        }
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
