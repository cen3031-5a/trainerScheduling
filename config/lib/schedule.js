'use strict';

var schedule = require('node-schedule');

var config = require('../config'),
  mongoose = require('./mongoose'),
  express = require('./express'),
  j = schedule.scheduleJob('*/5 * * * * *', function(){
    console.log('The answer to life, the universe, and everything!');
  });

module.exports = schedule;