'use strict';

describe('Requests E2E Tests:', function () {
  var request = {
    name: 'Time off - E2E testing',
    user: 'Lisbe',
    shiftTime: 'October 31st, 1-3pm',
    created: 'October 30th',
    class: 'Gymnastics',
    reason: 'New class',
  };

  var user_admin = {
    firstName: 'Chris',
    lastName: 'Brown',
    email: 'chris5175@ufl.edu',
    username: 'chris5175',
    password: 'Password123!',
    roles: 'admin'
  };

  var user_staff = {
    firstName: 'Lisbeth',
    lastName: 'Cardoso',
    email: 'lisbecg@gmail.com',
    username: 'lisbecg',
    password: 'P@ssword123',
    roles: 'user'
  };

  var signin = function(){
    browser.get('http://localhost:3000/authentication/signin');
    //Enter username
    element(by.model('credentials.username')).sendKeys(user_admin.username);
    //Enter password
    element(by.model('credentials.password')).sendKeys(user_admin.password);
    // Click Submit button
    element(by.css('button[type="submit"]')).click();
  };

  var signout = function () {
    // Sign out user.
    browser.get('http://localhost:3000/authentication/signout');
    // Delete cookies.
    browser.driver.manage().deleteAllCookies();
   };

  describe('Test Requests page', function () {
    it('Should report missing credentials', function () {
      browser.get('http://localhost:3000/requests');
      expect(element.all(by.repeater('request in requests')).count()).toEqual(0);
    });

    // it('Should list requests if credentials are not missing', function () {
    //   browser.get('http://localhost:3000/requests');
    // });

    it('Test creating a new request', function () {
      //Make sure user is signed in.
      signin();

      //Creating a new request.
      browser.get('http://localhost:3000/requests/create');
      //Do not rely on async calls, its just directly interacts with the dom and inserts the keys into the input field.
      //browser.ignoreSynchronization = true;
      //browser.driver.findElement(protractor.By.id('name')).sendKeys('batman');
      browser.waitForAngular();
      element(by.model('vm.request.name')).sendKeys(request.name);
      element(by.model('vm.request.class')).sendKeys(request.class);
      element(by.model('vm.request.shiftTime')).sendKeys(request.shiftTime);
      element(by.model('vm.request.reason')).sendKeys(request.reason);
      //Click the button to create the request.
      element(by.css('.btn btn-default')).click();
      //browser.sleep(4000);
      browser.waitForAngular();
      //Check that it goes to the right link.
      browser.get('http://localhost:3000/requests/' + request._id);
      browser.waitForAngular();
      //element(by.id('class')).sendKeys(request.class);
      //element(by.id('shiftTime')).sendKeys(request.shiftTime);
      //element(by.id('reason')).sendKeys(request.reason);
      // element(by.css('#class')).sendKeys(request.class);
      // element(by.css('#shiftTime')).sendKeys(request.shiftTime);
      // element(by.css('#reason')).sendKeys(request.reason);

      // Make sure user is sign out
      signout();
    });

    it('Accept request and go to calendar', function () {
      //TODO: Fix this and pass the ID - Ask Kurt!!
      browser.get('http://localhost:3000/requests/' + request._id);

      element(by.css('[ng-click="vm.removeAndGoToCalendar()"]')).click();
      browser.sleep(4000);

      //TODO: Check for popup

      browser.get('http://localhost:3000/schedules');
      browser.sleep(4000);
    });

    it('Decline and delete request', function () {
      browser.get('http://localhost:3000/requests/' + request._id);

      element(by.css('[ng-click="vm.remove()"]')).click();
      browser.sleep(4000);

      //TODO: Check for popup

      browser.get('http://localhost:3000/requests');
      browser.sleep(4000);
    });
      
  });
});
