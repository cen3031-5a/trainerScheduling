(function () {
  'use strict';

  // Availabilities controller
  angular
    .module('availabilities')
    .controller('AvailabilitiesController', AvailabilitiesController);

  AvailabilitiesController.$inject = ['$scope', '$state', '$window', 'Authentication', 'availabilityResolve'];

  function AvailabilitiesController ($scope, $state, $window, Authentication, availability) {
    var vm = this;

    vm.authentication = Authentication;
    vm.availability = availability;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;


    $scope.toDelete = function (id) {
      $state.go('availabilities.view', {
        availabilityId: id
      });
    };
    // Remove existing Availability
    function remove() {
      vm.availability.$remove($state.go('availabilities.create'));
      // if ($window.confirm('Are you sure you want to delete?')) {
      //   vm.availability.$remove($state.go('availabilities.list'));
      // }
    }

    // Save Availability
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.availabilityForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.availability._id) {
        vm.availability.$update(successCallback, errorCallback);
      } else {
        vm.availability.$save(successCallback, errorCallback);
        vm.availability._id = null;
      }

      function successCallback(res) {
        // $state.go('availabilities.view', {
        //   availabilityId: res._id
        // });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
