(function () {
  'use strict';

  angular
    .module('availabilities')
    .controller('AvailabilitiesListController', AvailabilitiesListController);

  AvailabilitiesListController.$inject = ['$scope','$state', 'Authentication', 'AvailabilitiesService'];

  function AvailabilitiesListController($scope,$state,Authentication, AvailabilitiesService) {
    var vm = this;
    vm.availabilities = AvailabilitiesService.query().sort('start');
    vm.availabilitie = AvailabilitiesService.query().$promise.then(function (result) {
      $scope.data = result;
    });
    vm.authentication = Authentication;
    $scope.user = vm.authentication;
  }
}());
