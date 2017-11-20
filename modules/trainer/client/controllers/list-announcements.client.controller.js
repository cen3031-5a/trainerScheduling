(function () {
  'use strict';

  angular
    .module('trainer')
    .controller('TrainerListController', TrainerListController);

  TrainerListController.$inject = ['trainerService', '$state', '$window', '$scope', '$sce', 'Authentication'];

  function TrainerListController(trainerService, $state, $window, $scope, $sce, Authentication) {

    var vm = this;
    vm.authentication = Authentication;
    vm.trainer = trainerService.query();

    if(vm.authentication.user.roles[0] === 'admin'){
      $scope.buttonnew = true;
    } else {
      $scope.buttonnew = false;
    }
  }

}());
