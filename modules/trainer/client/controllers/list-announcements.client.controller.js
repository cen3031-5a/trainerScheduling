(function () {
  'use strict';

  angular
    .module('trainer')
    .controller('TrainerListController', TrainerListController);

  TrainerListController.$inject = ['trainerService', '$state', '$window','Authentication'];

  function TrainerListController(trainerService, $state, $window,Authentication) {
    var vm = this;
    vm.authentication = Authentication;
    vm.trainer = trainerService.query();
  }

}());
