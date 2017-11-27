'use strict';

describe('Blogs E2E Tests:', function () {
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

  var test_newBlog = {
    name: 'Test blog',
    content: 'Puppy video',
    video: 'https://youtu.be/6CaJ2PjbXxM'
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


  describe('Test Blogs page', function () {
    it('Should report missing credentials', function () {
      browser.get('http://localhost:3000/blogs');
      expect(element.all(by.repeater('blog in blogs')).count()).toEqual(0);
    });

    it('Should go to Create Blog web page when Create New Entry link is clicked', function () {
      //Make sure to be signed in first.
      signin(testuser_admin);
      browser.waitForAngular();
      browser.get('http://localhost:3000/blogs');
      //Click Submit button
      element(by.id('createBlog')).click();
      browser.sleep(3000);
      expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/blogs/create');
    });

  });

  describe('New Blog page', function() {
    it('Should report missing blog name', function () {
        browser.get('http://localhost:3000/blogs/create');
        // Enter Content
        element(by.model('vm.blog.content')).sendKeys(test_newBlog.content);
        // Enter URL
        element(by.model('vm.blog.video')).sendKeys(test_newBlog.video);
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // Blog Name Missing Error
        expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Blog name is required.');
    });

    /*
    it('Should report successful creation of a new blog', function () {
      //Count number of blogs
      browser.get('http://localhost:3000/blogs');
      var oldBlogsNumber = element.all(by.repeater('blog in blogs')).count();
      browser.waitForAngular();
      //Create new blog
      browser.get('http://localhost:3000/blogs/create');
      // Enter Name
      element(by.model('vm.blog.name')).sendKeys(test_newBlog.name);
      // Enter Content
      element(by.model('vm.blog.content')).sendKeys(test_newBlog.content);
      // Enter URL
      element(by.model('vm.blog.video')).sendKeys(test_newBlog.video);
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      browser.waitForAngular();
      browser.sleep(3000);
      //Compare number of blogs
      browser.get('http://localhost:3000/blogs');
      var newBlogsNumber = oldBlogsNumber+1;
      expect(element.all(by.repeater('blog in blogs')).count()).toEqual(newBlogsNumber);
      //expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/blogs/' + vm.blog._id);
    });
    */
    
  });

});
