(function () {
  'use strict';

  // Requests controller
  angular
    .module('requests')
    .controller('RequestsController', RequestsController);

  RequestsController.$inject = ['$scope', '$state', '$window', 'Authentication', 'requestResolve'];

  function RequestsController ($scope, $state, $window, Authentication, request) {
    var vm = this;

    vm.authentication = Authentication;
    vm.request = request;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.removeAndGoToCalendar = removeAndGoToCalendar;
    vm.save = save;
    // Remove existing Request
    function remove() {
      if ($window.confirm('Are you sure you want to decline and delete this request?')) {
        vm.request.$remove($state.go('requests.list'));
      }
    }

    function removeAndGoToCalendar() {
      if ($window.confirm('Are you sure you want to accept this request and go to calendar?')) {
        vm.request.$remove($state.go('schedules.list'));
      }
    }

    // Save Request
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.requestForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.request._id) {
        vm.request.$update(successCallback, errorCallback);
      } else {
        vm.request.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('requests.view', {
          requestId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }

    }
  }
}());
