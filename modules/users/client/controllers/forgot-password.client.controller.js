'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$http', '$stateParams', '$location', 'Authentication', 'PasswordValidator',
  function ($scope, $http, $stateParams, $location, Authentication, PasswordValidator) {
    $scope.authentication = Authentication;
    $scope.popoverMsg = PasswordValidator.getPopoverMsg();

    //If user is signed in then redirect back home
    if ($scope.authentication.user) {
      $location.path('/');
    }

    // Submit forgotten password account id
    $scope.askForPasswordReset = function (isValid) {
      $scope.success = $scope.error = null;

      console.log('-------------------This is my forgot password controller.------------------------');
      console.log('isValid = ' + isValid);

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'forgotPasswordForm');

        return false;
      }

      var data = ({
          username: $scope.credentials.username,
          email: 'lisbecg@gmail.com',
          subject: 'Allegiance Athletics - Forgot Password',
          message: 'Hello world! Did you just forgot your password? '
      });

      console.log('Before the post');

      $http.post('/api/auth/forgot', data).success(function (response) {
        // Show user success message and clear form
        console.log('success!!!!');
        $scope.credentials = null;
        $scope.success = response.message;

      }).error(function (response) {
        // Show user error message and clear form
        console.log('Error!!!!');
        $scope.credentials = null;
        $scope.error = response.message;
      });
    };

/*    $scope.askForPasswordReset = function (isValid) {
        $scope.success = $scope.error = null;

        if (!isValid) {
            $scope.$broadcast('show-errors-check-validity', 'forgotPasswordForm');

            return false;
        }

        var data = ({
            username: $scope.credentials.username,
            email: 'lisbecg@gmail.com',
            subject: 'Allegiance Athletics - Forgot Password',
            message: 'Hello world! Did you just forgot your password? '
        });

        $http.post('/api/auth/forgot', data).success(function (response) {
            // Show user success message and clear form
            $scope.credentials = null;
            $scope.success = response.message;

        }).error(function (response) {
            // Show user error message and clear form
            $scope.credentials = null;
            $scope.error = response.message;
        });
    };*/

  }
]);
