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
        $window.location.href = "/calendarviews";
      }
    }

    // Save Calendarview
    function save(isValid) {
      //console.log(vm.calendarview.trainer);
      //alert(Date.parse('11/10/2017 1:13 PM').toISOString());

      //trying to email
      function email() {
        var path = require('path'),
          nodemailer = require('nodemailer'),
          config = require(path.resolve('./config/config')),
          mongoose = require('mongoose'),
          User = mongoose.model('User');

        var smtpTransport = nodemailer.createTransport({
          service: 'Mailgun',
          auth: {
            user: 'postmaster@sandboxf1d30b95f61a4c47b8a1f7da42149bbd.mailgun.org',
            pass: '7fcb60ba1fdd82863b98333447e08a20'
          }
        });
        var mailOptions = {
          to: vm.calendarview.user.email,
          from: config.mailer.from,
          subject: 'Password Reset',
          html: "<h1>HI</h1>"
        };
        smtpTransport.sendMail(mailOptions, function(err) {
          if (!err) {
            res.send({ message: 'An email has been sent to the provided email with further instructions.' });
          } else {
            return res.status(400).send({ message: 'Failure sending email' });
          }

          done(err);
        });
      }

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.calendarviewForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.calendarview._id) {
        vm.calendarview.$update(successCallback, errorCallback);
      } else {
        vm.calendarview.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        //$state.go('calendarviews.list');
        $window.location.href = "/calendarviews";
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
