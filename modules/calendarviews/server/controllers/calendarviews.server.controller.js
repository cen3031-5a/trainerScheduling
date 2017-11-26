'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Calendarview = mongoose.model('Calendarview'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  _ = require('lodash');

/**
 * Create a Calendarview
 */
exports.create = function(req, res) {
  var calendarview = new Calendarview(req.body);
  calendarview.user = req.user;
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  function email() {
    //trying to email
    var nodemailer = require('nodemailer');
    // create reusable transporter object using the default SMTP transport
    var smtpTransport = nodemailer.createTransport({
      service: 'Mailgun',
      auth: {
        user: 'postmaster@sandboxf1d30b95f61a4c47b8a1f7da42149bbd.mailgun.org',
        pass: '7fcb60ba1fdd82863b98333447e08a20'
      }
    });

    // setup email data with unicode symbols
    var mailOptions = {
      from: 'postmaster@sandboxf1d30b95f61a4c47b8a1f7da42149bbd.mailgun.org', // sender address
      to: 'vli27042@kopqi.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, info){
      if(error){
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
    });
  }

  email();

  //trying to email each time a new event is made
  function email(){
    var nodemailer = require('nodemailer');

    var smtpTransport = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'AllegianceAthleticsEmail@gmail.com',
        //shove this into a node env var
        pass: '1q!Q1q!Q1q'
      }
    });

      // setup e-mail data with unicode symbols
    var mailOptions = {
      to: 's1016023@mvrht.net',
      from: 'AllegianceAthleticsEmail@gmail.com',
      subject: 'Hello ✔', // Subject line
      text: 'Hello world ?', // plaintext body
      html: '<b>Hello world ?</b>' // html body
    };

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, info){
      if(error){
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
    });
  }
  //email();

  calendarview.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(calendarview);
    }
  });
};

/**
 * Show the current Calendarview
 */
exports.read = function(req, res) {
  // convert mongoose document to JSON
  var calendarview = req.calendarview ? req.calendarview.toJSON() : {};

  // Add a custom field to the Article, for determining if the current User is the "owner".
  // NOTE: This field is NOT persisted to the database, since it doesn't exist in the Article model.
  calendarview.isCurrentUserOwner = req.user && calendarview.user && calendarview.user._id.toString() === req.user._id.toString();
  res.jsonp(calendarview);
};

/**
 * Update a Calendarview
 */
exports.update = function(req, res) {
  var calendarview = req.calendarview;

  calendarview = _.extend(calendarview, req.body);

  calendarview.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(calendarview);
    }
  });
};

/**
 * Delete an Calendarview
 */
exports.delete = function(req, res) {
  var calendarview = req.calendarview;

  calendarview.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(calendarview);
    }
  });
};

/**
 * List of Calendarviews
 */
exports.list = function(req, res) {
  Calendarview.find().sort('-created').populate('user', 'displayName').exec(function(err, calendarviews) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(calendarviews);
    }
  });
};

/**
 * Calendarview middleware
 */
exports.calendarviewByID = function(req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Calendarview is invalid'
    });
  }

  Calendarview.findById(id).populate('user', 'displayName').exec(function (err, calendarview) {
    if (err) {
      return next(err);
    } else if (!calendarview) {
      return res.status(404).send({
        message: 'No Calendarview with that identifier has been found'
      });
    }
    req.calendarview = calendarview;
    next();
  });
};
