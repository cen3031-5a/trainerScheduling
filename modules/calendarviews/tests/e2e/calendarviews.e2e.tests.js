'use strict';

describe('Calendarviews E2E Tests:', function () {

  var testuser_admin = {
    firstName: 'test',
    lastName: 'user',
    email: 'lcardoso@ufl.edu',
    username: 'testuser_admin',
    password: 'P@ssword12345',
    roles: 'admin',
    favoriteColor: 'blue',
    favoriteAnimal: 'dog',
    favoriteCake: 'strawberry cake',
    favoriteKidsBook: 'War and Peace',
    favoriteOther: 'reading'
  };

  var test_class = {
    title: 'Aerobics',
    trainer: 'Lisbeth',
    color: 'blue',
    startDate: Date.now(),
    endDate: Date.now(),
    repeatDate: Date.now(),
    details: 'Testing creation of new class'
    //missing requestOff bool - do not know how to test that.
  };

  var signin = function(user){
    browser.get('http://localhost:3000/authentication/signin');
    //Enter username
    element(by.model('credentials.username')).sendKeys(user.username);
    //Enter password
    element(by.model('credentials.password')).sendKeys(user.password);
    // Click Submit button
    element(by.css('button[type="submit"]')).click();
  };

  var signout = function () {
    // Make sure user is signed out first
    browser.get('http://localhost:3000/authentication/signout');
    // Delete all cookies
    browser.driver.manage().deleteAllCookies();
  };

  describe('Test Calendarviews page', function () {
    it('Should report missing credentials', function () {
      browser.get('http://localhost:3000/calendarviews');
      expect(element.all(by.repeater('calendarview in calendarviews')).count()).toEqual(0);
    });
  });

  describe('Test New Class', function () {
    it('Should report missing class name', function () {
      //Make sure you are signed in.
      signin(testuser_admin);
      browser.waitForAngular();
      //Check for missing class name.
      browser.get('http://localhost:3000/calendarviews/create');
      //Enter Trainer
      element(by.model('vm.calendarview.trainer')).sendKeys(test_class.trainer);
      //Enter Color
      element(by.model('vm.calendarview.color')).sendKeys(test_class.color);
      //Enter Start Date
      element(by.id('start')).sendKeys(test_class.startDate);
      //Enter End Date
      element(by.id('end')).sendKeys(test_class.endDate);
      //Enter Repeat Date
      element(by.id('repeat')).sendKeys(test_class.repeatDate);
      //Enter Details
      element(by.model('vm.calendarview.details')).sendKeys(test_class.details);
      // Click Create button
      //element(by.css('button[type=submit]')).click();
      element(by.id('editClassButton')).click();
      // Password Errors
      //Class name error
      element.all(by.css('.error-text')).get(0).getText().then(function (text) {
        console.log(text);
        expect(text).toBe('Class name is required.');
      });
    });

    it('Should report missing trainer', function () {
      browser.get('http://localhost:3000/calendarviews/create');
      //Enter Class Name
      element(by.model('vm.calendarview.title')).sendKeys(test_class.title);
      //Enter Color
      element(by.model('vm.calendarview.color')).sendKeys(test_class.color);
      //Enter Start Date
      element(by.id('start')).sendKeys(test_class.startDate);
      //Enter End Date
      element(by.id('end')).sendKeys(test_class.endDate);
      //Enter Repeat Date
      element(by.id('repeat')).sendKeys(test_class.repeatDate);
      //Enter Details
      element(by.model('vm.calendarview.details')).sendKeys(test_class.details);
      // Click Create button
      //element(by.css('button[type=submit]')).click();
      element(by.id('editClassButton')).click();
      browser.sleep(3000);
      //Trainer error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Trainer is required.');
    });

    it('Should report missing start time', function () {
      browser.get('http://localhost:3000/calendarviews/create');
      //Enter Class Name
      element(by.model('vm.calendarview.title')).sendKeys(test_class.title);
      //Enter Color
      element(by.model('vm.calendarview.color')).sendKeys(test_class.color);
      //Enter Trainer
      element(by.model('vm.calendarview.trainer')).sendKeys(test_class.trainer);
      //Enter End Date
      element(by.id('end')).sendKeys(test_class.endDate);
      //Enter Repeat Date
      element(by.id('repeat')).sendKeys(test_class.repeatDate);
      //Enter Details
      element(by.model('vm.calendarview.details')).sendKeys(test_class.details);
      // Click Create button
      //element(by.css('button[type=submit]')).click();
      element(by.id('editClassButton')).click();
      browser.sleep(3000);
      //Start time error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Start time is required.');
    });

    it('Should report missing end time', function () {
      browser.get('http://localhost:3000/calendarviews/create');
      //Enter Class Name
      element(by.model('vm.calendarview.title')).sendKeys(test_class.title);
      //Enter Color
      element(by.model('vm.calendarview.color')).sendKeys(test_class.color);
      //Enter Trainer
      element(by.model('vm.calendarview.trainer')).sendKeys(test_class.trainer);
      //Enter Start Date
      element(by.id('start')).sendKeys(test_class.startDate);
      //Enter Repeat Date
      element(by.id('repeat')).sendKeys(test_class.repeatDate);
      //Enter Details
      element(by.model('vm.calendarview.details')).sendKeys(test_class.details);
      // Click Create button
      //element(by.css('button[type=submit]')).click();
      element(by.id('editClassButton')).click();
      browser.sleep(3000);
      //Start time error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('End time is required.');
    });

  });

});
