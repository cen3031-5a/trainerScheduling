'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Calendarview = mongoose.model('Calendarview');

/**
 * Globals
 */
var user,
  calendarview;

/**
 * Unit tests
 */
describe('Calendarview Model Unit Tests:', function() {
  beforeEach(function(done) {
    user = new User({
      firstName: 'Full',
      lastName: 'Name',
      displayName: 'Full Name',
      email: 'test@test.com',
      username: 'username',
      password: 'password'
    });

    user.save(function() {
      calendarview = new Calendarview({
        title: 'Calendarview name',
        trainer: 'example trainer',
        start: '11/30/2017 11:17 AM',
        end: '11/30/2017 11:18 AM'
      });

      done();
    });
  });

  describe('Method Save', function() {
    it('should be able to save without problems', function(done) {
      this.timeout(0);
      return calendarview.save(function(err) {
        should.not.exist(err);
        done();
      });
    });

    it('should be able to show an error when try to save without name', function(done) {
      calendarview.title = '';

      return calendarview.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  afterEach(function(done) {
    Calendarview.remove().exec(function() {
      User.remove().exec(function() {
        done();
      });
    });
  });
});
