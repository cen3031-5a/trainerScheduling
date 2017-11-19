(function () {
  'use strict';

  angular
    .module('trainer')
    .controller('TrainerListController', TrainerListController);

  TrainerListController.$inject = ['trainerService', '$scope', '$sce'];

  function TrainerListController(trainerService, $scope, $sce) {
    var vm = this;

    vm.trainer = trainerService.query();
    $scope.trustSrc = $sce.trustAsHtml(vm.trainer.announcement);
  }

}());
