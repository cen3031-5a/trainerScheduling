Trainer Scheduling

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/meanjs/mean?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/meanjs/mean.svg?branch=master)](https://travis-ci.org/meanjs/mean)
[![Dependencies Status](https://david-dm.org/meanjs/mean.svg)](https://david-dm.org/meanjs/mean)
[![Coverage Status](https://coveralls.io/repos/meanjs/mean/badge.svg?branch=master&service=github)](https://coveralls.io/github/meanjs/mean?branch=master)

MEAN.JS is a full-stack JavaScript open-source solution, which provides a solid starting point for [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/) based applications. The idea is to solve the common issues with connecting those frameworks, build a robust framework to support daily development needs, and help developers use better practices while working with popular JavaScript components.

## Before You Begin, Info On MEANJS which was used on this application
Before you begin we recommend you read about the basic building blocks that assemble a MEAN.JS application:
* MongoDB - Go through [MongoDB Official Website](http://mongodb.org/) and proceed to their [Official Manual](http://docs.mongodb.org/manual/), which should help you understand NoSQL and MongoDB better.
* Express - The best way to understand express is through its [Official Website](http://expressjs.com/), which has a [Getting Started](http://expressjs.com/starter/installing.html) guide, as well as an [ExpressJS Guide](http://expressjs.com/guide/error-handling.html) guide for general express topics. You can also go through this [StackOverflow Thread](http://stackoverflow.com/questions/8144214/learning-express-for-node-js) for more resources.
* AngularJS - Angular's [Official Website](http://angularjs.org/) is a great starting point. You can also use [Thinkster Popular Guide](http://www.thinkster.io/), and the [Egghead Videos](https://egghead.io/).
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.


## Our Project Known working Versions

NPM Version 5.3.0
Node Version 6.11.2
Bower Version 1.8.2
Angular version 2.7.2

use "npm install" command followed by "bower install"
AFter this use "grunt" command to run locally

##Credits/APIs used

Fullcalendar.io , version 3.7.0
Jquery
Moment.js
Bootstrap CSS


## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
  * Node v5 IS NOT SUPPORTED AT THIS TIME! 
* MongoDB - [Download & Install MongoDB](http://www.mongodb.org/downloads), and make sure it's running on the default port (27017).
* Ruby - [Download & Install Ruby](https://www.ruby-lang.org/en/documentation/installation/)
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages. Make sure you've installed Node.js and npm first, then install bower globally using npm:

```bash
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process. Make sure you've installed Node.js and npm first, then install grunt globally using npm:

```bash
$ npm install -g grunt-cli
```

* Sass - You're going to use [Sass](http://sass-lang.com/) to compile CSS during your grunt task. Make sure you have ruby installed, and then install Sass using gem install:

```bash
$ gem install sass
```

```bash
$ npm install -g grunt-cli
```

* Gulp - (Optional) You may use Gulp for Live Reload, Linting, and SASS or LESS.

```bash
$ npm install gulp -g
```

## Downloading MEAN.JS
There are several ways you can get the MEAN.JS boilerplate:

### Cloning The GitHub Repository
The recommended way to get MEAN.js is to use git to directly clone the MEAN.JS repository:

```bash
$ git clone https://github.com/meanjs/mean.git meanjs
```

This will clone the latest version of the MEAN.JS repository to a **meanjs** folder.


## Features Implemented

### Admin/Staff Roles
Only staff members at Allegiance Athletics can have an account on this trainer scheduling web application and these accounts are created by the client and others who have the admin role. These assigned roles give the user privileges to access certain pages on the web application and will deny the staff from seeing admin-only pages. Admin has access to every page and privileges to add, edit, and delete content.

### Announcements
The Announcements view on the homepage allows for the user to see updates that the admin posted. Users with the staff role cannot create a new announcement, however, the admin can create, edit and delete announcements that are created. The buttons for these abilities will only show up in the admin view, so the staff cannot go to these pages.

### Availabilities
The user with the staff role will be able to add/update their availability for the week by using a click, draggable calendar that saves the availability for the admin to see. Staffs can only see their own calendar, however, the admin has the ability to view all the staff’s availability on one calendar and even toggle what they want to view on their availability calendar. The admin role can select buttons to see one particular staff availability or see all at the same time.

### Blog View
Users can see the list of blogs, in which, entries can be created by all users by using the Create New Blog button to access the form. There is a search bar that the users can use to search for keywords in any of the entries. Entries can be edited/deleted by the user who created the entry or by the admin who has access to modify any entry.

### Calendar View
The calendar view shows the staff’s schedule with events indicating the class, start time and end time assigned by the admin. The list on the right of the calendar shows upcoming events in the next seven days and users can use the search bar to look for specific keywords to filter out what they are looking for. Users can view all events by going to the events list page where they can use the search bar to filter through the events. Only admin can access the form to create a new class that will add events onto the calendar view that the staff can see.

### Users
Only admin can access the pages to view all users and create new users. Managing users shows a list of all the users when a particular is selected, the admin can see about all the information on that user. These users can be edited or deleted by the admin.
