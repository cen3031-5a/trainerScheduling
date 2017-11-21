(function () {
  'use strict';

  angular
    .module('calendarviews')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Calendarviews',
      state: 'calendarviews',
      type: 'dropdown',
      roles: ['user','admin']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'calendarviews', {
      title: 'Show Calendar',
      state: 'calendarviews.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'calendarviews', {
      title: 'Create Event',
      state: 'calendarviews.create',
      roles: ['admin']
    });

    // Add the request create item
    menuService.addSubMenuItem('topbar', 'calendarviews', {
      title: 'Request Off',
      state: 'calendarviews.request',
      roles: ['admin']
    });
  }
}());
