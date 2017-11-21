(function () {
  'use strict';

  angular
    .module('calendarviews')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('calendarviews', {
        abstract: true,
        url: '/calendarviews',
        template: '<ui-view/>'
      })
      .state('calendarviews.list', {
        url: '',
        templateUrl: 'modules/calendarviews/client/views/list-calendarviews.client.view.html',
        controller: 'CalendarviewsListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Calendar'
        }
      })
      .state('calendarviews.requestOff', {
        url: '/requestOff',
        templateUrl: 'modules/calendarviews/client/views/requestList-calendarviews.client.view.html',
        controller: 'CalendarviewsListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Request Off'
        }
      })
      .state('calendarviews.create', {
        url: '/create',
        templateUrl: 'modules/calendarviews/client/views/form-calendarview.client.view.html',
        controller: 'CalendarviewsController',
        controllerAs: 'vm',
        resolve: {
          calendarviewResolve: newCalendarview
        },
        data: {
          roles: ['user','admin'],
          pageTitle: 'Create Event'
        }
      })
      .state('calendarviews.edit', {
        url: '/:calendarviewId/edit',
        templateUrl: 'modules/calendarviews/client/views/form-calendarview.client.view.html',
        controller: 'CalendarviewsController',
        controllerAs: 'vm',
        resolve: {
          calendarviewResolve: getCalendarview
        },
        data: {
          roles: ['user','admin'],
          pageTitle: 'Edit Calendarview {{ calendarviewResolve.title }}'
        }
      })
      .state('calendarviews.request', {
        url: '/:calendarviewId/request',
        templateUrl: 'modules/calendarviews/client/views/request-calendarview.client.view.html',
        controller: 'CalendarviewsController',
        controllerAs: 'vm',
        resolve: {
          calendarviewResolve: getCalendarview
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Request Off {{ calendarviewResolve.title }}'
        }
      })
      .state('calendarviews.view', {
        url: '/:calendarviewId',
        templateUrl: 'modules/calendarviews/client/views/view-calendarview.client.view.html',
        controller: 'CalendarviewsController',
        controllerAs: 'vm',
        resolve: {
          calendarviewResolve: getCalendarview
        },
        data: {
          pageTitle: 'Calendarview {{ calendarviewResolve.title }}'
        }
      });
  }

  getCalendarview.$inject = ['$stateParams', 'CalendarviewsService'];

  function getCalendarview($stateParams, CalendarviewsService) {
    return CalendarviewsService.get({
      calendarviewId: $stateParams.calendarviewId
    }).$promise;
  }

  newCalendarview.$inject = ['CalendarviewsService'];

  function newCalendarview(CalendarviewsService) {
    return new CalendarviewsService();
  }
}());
