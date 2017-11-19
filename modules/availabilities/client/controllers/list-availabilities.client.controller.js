(function () {
  'use strict';

  angular
    .module('availabilities')
    .controller('AvailabilitiesListController', AvailabilitiesListController);

  AvailabilitiesListController.$inject = ['$scope', 'AvailabilitiesService'];

  function AvailabilitiesListController($scope, AvailabilitiesService) {
    var vm = this;

    vm.availabilities = AvailabilitiesService.query().sort('start');
    vm.availabilitie = AvailabilitiesService.query().$promise.then(function (result) {
      $scope.data = result;
    });
  }
}());
