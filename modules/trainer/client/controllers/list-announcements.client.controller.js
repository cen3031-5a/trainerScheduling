(function () {
  'use strict';

  angular
    .module('trainer')
    .controller('TrainerListController', TrainerListController);

  TrainerListController.$inject = ['trainerService', '$state', '$window', '$scope', '$sce'];

  function TrainerListController(trainerService, $state, $window, $scope, $sce) {

    var vm = this;

    vm.trainer = trainerService.query();
    $scope.trustSrc = $sce.trustAsHtml(vm.trainer.announcement);
  }

}());
