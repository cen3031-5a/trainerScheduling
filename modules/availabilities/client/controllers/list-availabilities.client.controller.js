(function () {
  'use strict';

  angular
    .module('availabilities')
    .controller('AvailabilitiesListController', AvailabilitiesListController);

  AvailabilitiesListController.$inject = ['$scope','$state','$http','Authentication', 'AvailabilitiesService'];

  function AvailabilitiesListController($scope,$state,$http,Authentication, AvailabilitiesService) {
    var vm = this;
    vm.availabilities = AvailabilitiesService.query().sort('start');
    vm.availabilitie = AvailabilitiesService.query().$promise.then(function (result) {
      $scope.data = result;
    });
    $scope.newData = null;
    vm.authentication = Authentication;
    $scope.user = vm.authentication;
    $scope.newInfo = function (id) {
      $scope.$apply(function(){ //code 
        vm.availabilitie = AvailabilitiesService.query().$promise.then(function (result) {
          $scope.newData = result;
        });
      });
    };

  }
}());
