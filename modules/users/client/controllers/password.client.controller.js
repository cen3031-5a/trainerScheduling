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

      console.log('isValid = ' + isValid);

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'forgotPasswordForm');

        return false;
      }

      console.log('Before the post');

      $http.post('/api/auth/forgot', $scope.credentials.username).success(function (response) {
        // Show user success message and clear form
        $scope.credentials = null;
        $scope.success = response.message;

      }).error(function (response) {
        // Show user error message and clear form
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

    // Change user password
    $scope.resetUserPassword = function (isValid) {
      $scope.success = $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'resetPasswordForm');

        return false;
      }

      $http.post('/api/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function (response) {
        // If successful show success message and clear form
        $scope.passwordDetails = null;

        // Attach user profile
        Authentication.user = response;

        // And redirect to the index page
        $location.path('/password/reset/success');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);
