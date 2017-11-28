'use strict';
process.env.NODE_ENV = 'test';
process.env.MONGOLAB_URI = 'mongodb://Jgruber27:jamesgruber1227@ds141175.mlab.com:41175/project-test';
/**
 * Module dependencies.
 */

var path = require('path');
var app = require(path.resolve('./config/lib/app'));


app.init(function () {
  console.log('Initialized test automation');
});
