'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
  mongoose = require('mongoose'),
  User = mongoose.model('User', new mongoose.Schema()),
  Trainer = mongoose.model('Trainer', new mongoose.Schema());

/**
 * Globals
 */
var user, trainer;

/**
 * Unit tests
 */
describe('Trainer Model Unit Tests:', function() {
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
      trainer = new Trainer({
        name: "Testing Name",
        announcement: "Test body!"
      });

      done();
    });
  });

  describe('Method Save', function() {
    it('should be able to save without problems', function(done) {
      return trainer.save(function(err) {
        should.not.exist(err);
        done();
      });
    });
  });

  afterEach(function(done) { 
    Trainer.remove().exec(function(){
      User.remove().exec(function(){
        done();
      });
    });
  });
});
