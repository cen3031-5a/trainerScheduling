# Trainer Scheduling

Website
https://trainer-schedule-allegiance.herokuapp.com

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

User Features
Availability
	Staff members are able to add / update their availability during the week by simply clicking on the menu item Availabilities, and then dragging and dropping the cursor over the calendar view, as shown in Figure 1.	
Figure 1: “Availability of staff members.”
Blog
Blogs List
	Staff members are able to see the different blogs that have been created by all users of the web app simply by clicking on the Blog menu item (see Figure 2).
	
Figure 2: “List of blogs.”
Search
Users can search keywords by entering the desired value in the Search bar. The list of blogs will be updated in real time to partially match the entered keyword (see Figure 3).

Figure 3: “Search functionality.”
Create a New Blog
In case that a staff member wants to create a blog, he / she can click on the New Entry button shown in Figure 2. He/she will be redirected to another web page in which a new blog entry can be created (see Figure 4).

Figure 4: “Staff members can create blog entries.”
Calendar
Calendar View
	Staff members can view their schedule in a calendar view by clicking on the Calendar -> Show Calendar menu items (see Figure 5). Even though this user has no shifts in his/her calendar yet, as soon as the administrators of the web app decide to assign him/her shifts, the calendar will show this information.
	On the right side of the view a list of events will be shown (see Figure 5). At this moment the list is empty, but when is not a list of events will appear. Staff members will be able to search keywords by entering the desired value in the Search bar. The list of events will be updated in real time to partially match the entered keyword.
	
	Figure 5: “Calendar view of staff member’s schedule.”
Events List
	Staff members will be able to view a list of events by clicking on the Calendar -> List All Events menu items (see Figure 6). They will also be able to search keywords by entering the desired value in the Search bar. The list of events will be updated in real time to match the entered keyword.

	
Figure 6: “List of events associated to a staff member.”

Settings
Edit Profile
	Staff members are allowed to edit their profile as they please (see Figure 7). For this they should click on their name and then on Edit Profile menu item. Staff members only have to make sure of entering valid values for First Name, Last Name, Email and Username fields because these fields are required. All other information is optional.
	
	Figure 7: “Users can edit their profile.”
Change Profile Picture
	Besides editing their profile, staff members can edit their picture by clicking on their name and then on Change Profile Picture menu item (see Figure 8). Once in this web page, staff members can click the Select Image button and choose a local image from their computers or mobile devices.
	
	Figure 8: “Staff members can change their profile picture.”
Change Password
	In addition to editing their profile and choosing a profile picture, staff members can change their password. If they click on their name and then on the Change Password menu item then they will be redirected to the web page shown in Figure 9. Here they can modify their password.
	
	Figure 9: “Staff members can change their password.”
Admin Features
The admin will be able to manage all user (admin-screenshot-1)  and also be able to add new users (admin-screenshot-2). This is a requirement as Sara, our client, wants to be the only one to make new accounts, ie , she doesn't want anyone who has access to the site to be able to sign-up new users. So in the Add New User section she will be the only one making the staff’s account.  All of the regular account registration process is kept but we added more schemas in order to specify the staff member. One example is how they choose a color that later will be shown in the availabilities section (admin-screenshot-3). In the availabilities section, the admin will be able to see all staff who are available and also select specific ones to her liking.  She will be able to see this availability when accepting or requesting a “request-off” and when she is creating a new class (admin-screenshot-4). We did this in order for her to have a good idea how who is able to work when replacing the request off and also be able to create classes according the staff who has that available slot. Admins will also have the ability to create announcements that will be shown to all staff members who visit the front page (admin-screenshot-5).


admin-Screenshot-1


admin-Screenshot-2 

admin-screenshot-3


admin-screenshot-4

admin-screenshot-5





