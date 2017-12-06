'use strict';

describe('Calendarviews E2E Tests:', function () {
  describe('Test Calendarviews page', function () {
    it('Should report missing credentials', function () {
      browser.get('http://localhost:3001/calendarviews');
      expect(element.all(by.repeater('calendarview in calendarviews')).count()).toEqual(0);
    });
  });

  describe('Test New Class', function () {
    it('Should report missing class name', function () {
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

      // browser.wait(function () {
      //     return browser.isElementPresent(element(by.id('editClassButton')));
      // }, timeout);

      //Trainer error
      element.all(by.css('.error-text')).get(0).getText().then(function (text) {
        //console.log(text);
        expect(text).toBe('Trainer is required.');
      });
      //expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Trainer is required.');
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
      //Start time error
      //expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Start time is required.');
      element.all(by.css('.error-text')).get(0).getText().then(function (text) {
        //console.log(text);
        expect(text).toBe('Start time is required.');
      });
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
      //Start time error
      //expect(element.all(by.css('.error-text')).get(0).getText()).toBe('End time is required.');
      element.all(by.css('.error-text')).get(0).getText().then(function (text) {
        //console.log(text);
        expect(text).toBe('End time is required.');
      });
    });

  });
});
