'use strict';

describe('Users E2E Tests:', function () {
  var user1 = {
    firstName: 'test',
    lastName: 'user',
    email: 'test.user@meanjs.com',
    username: 'testUser',
    password: 'P@$$w0rd!!',
    favoriteColor: 'yellow',
    favoriteAnimal: 'cat',
    favoriteCake: 'chocolate cake',
    favoriteKidsBook: 'The Little Prince',
    favoriteOther: 'dancing'
  };

  var user2 = {
    firstName: 'test',
    lastName: 'user2',
    email: 'test.user2@meanjs.com',
    username: 'testUser2',
    password: 'P@$$w0rd!!',
    favoriteColor: 'pink',
    favoriteAnimal: 'bear',
    favoriteCake: 'vanilla cake',
    favoriteKidsBook: 'The Three Musketeers',
    favoriteOther: 'watching movies'
  };

  var newPassword = 'P@$$w0rds!!';

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

  var user_staff = {
    firstName: 'Lisbeth',
    lastName: 'Cardoso',
    email: 'lisbecg@gmail.com',
    username: 'lisbecg',
    password: 'P@ssword123',
    roles: 'user',
    favoriteColor: 'red',
    favoriteAnimal: 'dolphin',
    favoriteCake: 'peanut butter cake',
    favoriteKidsBook: 'The Miserables',
    favoriteOther: 'cooking'
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


    /*describe('Signup Validation', function () {
      it('Should report missing first name', function () {
        browser.get('http://localhost:3000/authentication/signup');
        // Enter Last Name
        element(by.model('credentials.lastName')).sendKeys(user_admin.lastName);
        // Enter Email
        element(by.model('credentials.email')).sendKeys(user_admin.email);
        // Enter Username
        element(by.model('credentials.username')).sendKeys(user_admin.username);
        // Enter Password
        element(by.model('credentials.password')).sendKeys(user_admin.password);
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // First Name Error
        expect(element.all(by.css('.error-text')).get(0).getText()).toBe('First name is required.');
      });

      it('Should report missing last name', function () {
        browser.get('http://localhost:3000/authentication/signup');
        // Enter First Name
        element(by.model('credentials.firstName')).sendKeys(user1.firstName);
        // Enter Email
        element(by.model('credentials.email')).sendKeys(user1.email);
        // Enter Username
        element(by.model('credentials.username')).sendKeys(user1.username);
        // Enter Password
        element(by.model('credentials.password')).sendKeys(user1.password);
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // Last Name Error
        expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Last name is required.');
      });

      it('Should report missing email address', function () {
        browser.get('http://localhost:3000/authentication/signup');
        // Enter First Name
        element(by.model('credentials.firstName')).sendKeys(user1.firstName);
        // Enter Last Name
        element(by.model('credentials.lastName')).sendKeys(user1.lastName);
        // Enter Username
        element(by.model('credentials.username')).sendKeys(user1.username);
        // Enter Password
        element(by.model('credentials.password')).sendKeys(user1.password);
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // Email address error
        expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Email address is required.');
      });

      it('Should report invalid email address - "123"', function () {
        browser.get('http://localhost:3000/authentication/signup');
        // Enter First Name
        element(by.model('credentials.firstName')).sendKeys(user1.firstName);
        // Enter Last Name
        element(by.model('credentials.lastName')).sendKeys(user1.lastName);
        // Enter Email
        element(by.model('credentials.email')).sendKeys('123');
        // Enter Username
        element(by.model('credentials.username')).sendKeys(user1.username);
        // Enter Password
        element(by.model('credentials.password')).sendKeys(user1.password);
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // Email address error
        expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Email address is invalid.');
      });

      /!**
       * Note: 123@123 is a valid email adress according to HTML5.
       * However, 123@123@123 is an invalid email address.
       *!/
      it('Should report invalid email address - "123@123@123"', function () {
        browser.get('http://localhost:3000/authentication/signup');
        // Enter First Name
        element(by.model('credentials.firstName')).sendKeys(user1.firstName);
        // Enter Last Name
        element(by.model('credentials.lastName')).sendKeys(user1.lastName);
        // Enter Email
        element(by.model('credentials.email')).sendKeys('123@123@123');
        // Enter Username
        element(by.model('credentials.username')).sendKeys(user1.username);
        // Enter Password
        element(by.model('credentials.password')).sendKeys(user1.password);
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // Email address error
        expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Email address is invalid.');
      });

      it('Should report missing username', function () {
        browser.get('http://localhost:3000/authentication/signup');
        // Enter First Name
        element(by.model('credentials.firstName')).sendKeys(user1.firstName);
        // Enter Last Name
        element(by.model('credentials.lastName')).sendKeys(user1.lastName);
        // Enter Email
        element(by.model('credentials.email')).sendKeys(user1.email);
        // Enter Password
        element(by.model('credentials.password')).sendKeys(user1.password);
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // Username Error
        expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Username is required.');
      });

      it('Should report a password with less than 10 characters long - "P@$$w0rd!"', function () {
        browser.get('http://localhost:3000/authentication/signup');
        // Enter First Name
        element(by.model('credentials.firstName')).sendKeys(user1.firstName);
        // Enter Last Name
        element(by.model('credentials.lastName')).sendKeys(user1.lastName);
        // Enter Email
        element(by.model('credentials.email')).sendKeys(user1.email);
        // Enter Username
        element(by.model('credentials.username')).sendKeys(user1.username);
        // Enter Invalid Password
        element(by.model('credentials.password')).sendKeys('P@$$w0rd!');
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // Password Error
        expect(element.all(by.css('.error-text')).get(0).getText()).toBe('The password must be at least 10 characters long.');
      });

      it('Should report a password with greater than 128 characters long.', function () {
        browser.get('http://localhost:3000/authentication/signup');
        // Enter First Name
        element(by.model('credentials.firstName')).sendKeys(user1.firstName);
        // Enter Last Name
        element(by.model('credentials.lastName')).sendKeys(user1.lastName);
        // Enter Email
        element(by.model('credentials.email')).sendKeys(user1.email);
        // Enter Username
        element(by.model('credentials.username')).sendKeys(user1.username);
        // Enter Invalid Password
        element(by.model('credentials.password')).sendKeys(')!/uLT="lh&:`6X!]|15o!$!TJf,.13l?vG].-j],lFPe/QhwN#{Z<[*1nX@n1^?WW-%_.*D)m$toB+N7z}kcN#B_d(f41h%w@0F!]igtSQ1gl~6sEV&r~}~1ub>If1c+');
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // Password Error
        expect(element.all(by.css('.error-text')).get(0).getText()).toBe('The password must be fewer than 128 characters.');
      });

      it('Should report a password with more than 3 or more repeating characters - "P@$$w0rd!!!"', function () {
        browser.get('http://localhost:3000/authentication/signup');
        // Enter First Name
        element(by.model('credentials.firstName')).sendKeys(user1.firstName);
        // Enter Last Name
        element(by.model('credentials.lastName')).sendKeys(user1.lastName);
        // Enter Email
        element(by.model('credentials.email')).sendKeys(user1.email);
        // Enter Username
        element(by.model('credentials.username')).sendKeys(user1.username);
        // Enter Invalid Password
        element(by.model('credentials.password')).sendKeys('P@$$w0rd!!!');
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // Password Error
        expect(element.all(by.css('.error-text')).get(0).getText()).toBe('The password may not contain sequences of three or more repeated characters.');
      });

      it('Should report a password with no uppercase letters - "p@$$w0rd!!"', function () {
        browser.get('http://localhost:3000/authentication/signup');
        // Enter First Name
        element(by.model('credentials.firstName')).sendKeys(user1.firstName);
        // Enter Last Name
        element(by.model('credentials.lastName')).sendKeys(user1.lastName);
        // Enter Email
        element(by.model('credentials.email')).sendKeys(user1.email);
        // Enter Username
        element(by.model('credentials.username')).sendKeys(user1.username);
        // Enter Invalid Password
        element(by.model('credentials.password')).sendKeys('p@$$w0rd!!');
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // Password Error
        expect(element.all(by.css('.error-text')).get(0).getText()).toBe('The password must contain at least one uppercase letter.');
      });

      it('Should report a password with less than one number - "P@$$word!!"', function () {
        browser.get('http://localhost:3000/authentication/signup');
        // Enter First Name
        element(by.model('credentials.firstName')).sendKeys(user1.firstName);
        // Enter Last Name
        element(by.model('credentials.lastName')).sendKeys(user1.lastName);
        // Enter Email
        element(by.model('credentials.email')).sendKeys(user1.email);
        // Enter Username
        element(by.model('credentials.username')).sendKeys(user1.username);
        // Enter Invalid Password
        element(by.model('credentials.password')).sendKeys('P@$$word!!');
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // Password Error
        expect(element.all(by.css('.error-text')).get(0).getText()).toBe('The password must contain at least one number.');
      });

      it('Should report a password with less than one special character - "Passw0rdss"', function () {
        browser.get('http://localhost:3000/authentication/signup');
        // Enter First Name
        element(by.model('credentials.firstName')).sendKeys(user1.firstName);
        // Enter Last Name
        element(by.model('credentials.lastName')).sendKeys(user1.lastName);
        // Enter Email
        element(by.model('credentials.email')).sendKeys(user1.email);
        // Enter Username
        element(by.model('credentials.username')).sendKeys(user1.username);
        // Enter Invalid Password
        element(by.model('credentials.password')).sendKeys('Passw0rdss');
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // Password Error
        expect(element.all(by.css('.error-text')).get(0).getText()).toBe('The password must contain at least one special character.');
      });

      it('Should Successfully register new user', function () {
        browser.get('http://localhost:3000/authentication/signup');
        // Enter FirstName
        element(by.model('credentials.firstName')).sendKeys(user1.firstName);
        // Enter LastName
        element(by.model('credentials.lastName')).sendKeys(user1.lastName);
        // Enter Email
        element(by.model('credentials.email')).sendKeys(user1.email);
        // Enter UserName
        element(by.model('credentials.username')).sendKeys(user1.username);
        // Enter Password
        element(by.model('credentials.password')).sendKeys(user1.password);
        // Click Submit button
        element(by.css('button[type="submit"]')).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/');
      });

      it('Should report Email already exists', function () {
        // Make sure user is signed out first
        signout();
        // Signup
        browser.get('http://localhost:3000/authentication/signup');
        // Enter First Name
        element(by.model('credentials.firstName')).sendKeys(user2.firstName);
        // Enter Last Name
        element(by.model('credentials.lastName')).sendKeys(user2.lastName);
        // Enter Email
        element(by.model('credentials.email')).sendKeys(user1.email);
        // Enter Username
        element(by.model('credentials.username')).sendKeys(user2.username);
        // Enter Invalid Password
        element(by.model('credentials.password')).sendKeys(user2.password);
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // Password Error
        expect(element.all(by.css('strong')).get(0).getText()).toBe('Email already exists');
      });

      it('Should report Username already exists', function () {
        // Signup
        browser.get('http://localhost:3000/authentication/signup');
        // Enter First Name
        element(by.model('credentials.firstName')).sendKeys(user2.firstName);
        // Enter Last Name
        element(by.model('credentials.lastName')).sendKeys(user2.lastName);
        // Enter Email
        element(by.model('credentials.email')).sendKeys(user2.email);
        // Enter Username
        element(by.model('credentials.username')).sendKeys(user1.username);
        // Enter Invalid Password
        element(by.model('credentials.password')).sendKeys(user2.password);
        // Click Submit button
        element(by.css('button[type=submit]')).click();
        // Password Error
        expect(element.all(by.css('strong')).get(0).getText()).toBe('Username already exists');
      });

    });
    */

  describe('Signin Validation', function () {

    it('Should report missing credentials', function () {
      //Make sure user is signed out first
      signout();
      //Sign in
      browser.get('http://localhost:3000/authentication/signin');
      // Click Submit button
      element(by.css('button[type="submit"]')).click();
      // Username Error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Username is required.');
      // Password Error
      expect(element.all(by.css('.error-text')).get(1).getText()).toBe('Password is required.');
    });

    it('Verify that the user is logged in', function() {
      //Make sure user is signed out first
      signout();
      //Sign in
      browser.get('http://localhost:3000/authentication/signin');
      // Enter UserName
      element(by.model('credentials.username')).sendKeys(testuser_admin.username);
      // Enter Password
      element(by.model('credentials.password')).sendKeys(testuser_admin.password);
      // Click Submit button
      element(by.css('button[type="submit"]')).click();
      expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/');
    });

  });

  describe ('Change Password Settings Validation', function () {

    it('Should report missing passwords', function () {
      browser.get('http://localhost:3000/settings/password');
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Password Errors
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Your current password is required.');
      expect(element.all(by.css('.error-text')).get(1).getText()).toBe('Enter a new password.');
      expect(element.all(by.css('.error-text')).get(2).getText()).toBe('Verify your new password.');
    });

    it('Should report a password with less than 10 characters long - "P@$$w0rd!"', function () {
      browser.get('http://localhost:3000/settings/password');
      // Enter Current Password
      element(by.model('passwordDetails.currentPassword')).sendKeys(testuser_admin.password);
      // Enter Invalid Password
      element(by.model('passwordDetails.newPassword')).sendKeys('P@$$w0rd!');
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Password Error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('The password must be at least 10 characters long.');
    });

    it('Should report a password with greater than 128 characters long.', function () {
      browser.get('http://localhost:3000/settings/password');
      // Enter Current Password
      element(by.model('passwordDetails.currentPassword')).sendKeys(testuser_admin.password);
      // Enter Invalid Password
      element(by.model('passwordDetails.newPassword')).sendKeys(')!/uLT="lh&:`6X!]|15o!$!TJf,.13l?vG].-j],lFPe/QhwN#{Z<[*1nX@n1^?WW-%_.*D)m$toB+N7z}kcN#B_d(f41h%w@0F!]igtSQ1gl~6sEV&r~}~1ub>If1c+');
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Password Error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('The password must be fewer than 128 characters.');
    });

    it('Should report a password with more than 3 or more repeating characters - "P@$$w0rd!!!"', function () {
      browser.get('http://localhost:3000/settings/password');
      // Enter Current Password
      element(by.model('passwordDetails.currentPassword')).sendKeys(testuser_admin.password);
      // Enter Invalid Password
      element(by.model('passwordDetails.newPassword')).sendKeys('P@$$w0rd!!!');
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Password Error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('The password may not contain sequences of three or more repeated characters.');
    });

    it('Should report a password with no uppercase letters - "p@$$w0rd!!"', function () {
      browser.get('http://localhost:3000/settings/password');
      // Enter Current Password
      element(by.model('passwordDetails.currentPassword')).sendKeys(testuser_admin.password);
      // Enter Invalid Password
      element(by.model('passwordDetails.newPassword')).sendKeys('p@$$w0rd!!');
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Password Error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('The password must contain at least one uppercase letter.');
    });

    it('Should report a password with less than one number - "P@$$word!!"', function () {
      browser.get('http://localhost:3000/settings/password');
      // Enter Current Password
      element(by.model('passwordDetails.currentPassword')).sendKeys(testuser_admin.password);
      // Enter Invalid Password
      element(by.model('passwordDetails.newPassword')).sendKeys('P@$$word!!');
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Password Error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('The password must contain at least one number.');
    });

    it('Should report a password with less than one special character - "Passw0rdss"', function () {
      browser.get('http://localhost:3000/settings/password');
      // Enter Current Password
      element(by.model('passwordDetails.currentPassword')).sendKeys(testuser_admin.password);
      // Enter Invalid Password
      element(by.model('passwordDetails.newPassword')).sendKeys('Passw0rdss');
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Password Error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('The password must contain at least one special character.');
    });

    it('Should report passwords do not match', function () {
      browser.get('http://localhost:3000/settings/password');
      // Enter Current Password
      element(by.model('passwordDetails.currentPassword')).sendKeys(testuser_admin.password);
      // Enter New Password
      element(by.model('passwordDetails.newPassword')).sendKeys('P@$$w0rds!!');
      // Verify New Password
      element(by.model('passwordDetails.verifyPassword')).sendKeys('P@$$w0rds!');
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Password Errors
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Passwords do not match.');
    });

    /*
    it('Should change the password to - "P@$$w0rds!!"', function () {
      browser.get('http://localhost:3000/settings/password');
      // Enter Current Password
      element(by.model('passwordDetails.currentPassword')).sendKeys(testuser_admin.password);
      // Enter New Password
      element(by.model('passwordDetails.newPassword')).sendKeys(newPassword);
      // Verify New Password
      element(by.model('passwordDetails.verifyPassword')).sendKeys(newPassword);
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      browser.sleep(10000);
      // Password Changed
      expect(element.all(by.id('.text-success')).get(0).getText()).toBe('Password Changed Successfully');
    });

    it('Should change the password to previous password', function () {
      browser.get('http://localhost:3000/settings/password');
      // Enter Current Password
      element(by.model('passwordDetails.currentPassword')).sendKeys(newPassword);
      // Enter New Password
      element(by.model('passwordDetails.newPassword')).sendKeys(testuser_admin.password);
      // Verify New Password
      element(by.model('passwordDetails.verifyPassword')).sendKeys(testuser_admin.password);
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      browser.sleep(10000);
      // Password Changed
      expect(element.all(by.id('.text-success')).get(0).getText()).toBe('Password Changed Successfully');
    });
    */

  });

  /*
  describe('Edit Profile', function () {
    it('Should report missing first name', function () {
      browser.get('http://localhost:3000/settings/profile');
      // Enter Last Name
      element(by.model('user.lastName')).sendKeys(testuser_admin.lastName);
      // Enter Email
      element(by.model('user.email')).sendKeys(testuser_admin.email);
      // Enter Username
      element(by.model('user.username')).sendKeys(testuser_admin.username);
      // Enter Favorite Color
      element(by.model('user.favoriteColor')).sendKeys(testuser_admin.favoriteColor);
      // Enter Favorite Animal
      element(by.model('user.favoriteAnimal')).sendKeys(testuser_admin.favoriteAnimal);
      // Enter Favorite Cake
      element(by.model('user.favoriteCake')).sendKeys(testuser_admin.favoriteCake);
      // Enter Favorite Kids Book
      element(by.model('user.favoriteKidsBook')).sendKeys(testuser_admin.favoriteKidsBook);
      // Enter Favorite Other
      element(by.model('user.favoriteOther')).sendKeys(testuser_admin.favoriteOther);
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // First Name Error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('First name is required.');
    });

    it('Should report missing last name', function () {
      browser.get('http://localhost:3000/settings/profile');
      // Enter First Name
      element(by.model('user.firstName')).sendKeys(testuser_admin.firstName);
      // Enter Email
      element(by.model('user.email')).sendKeys(testuser_admin.email);
      // Enter Username
      element(by.model('user.username')).sendKeys(testuser_admin.username);
      // Enter Favorite Color
      element(by.model('user.favoriteColor')).sendKeys(testuser_admin.favoriteColor);
      // Enter Favorite Animal
      element(by.model('user.favoriteAnimal')).sendKeys(testuser_admin.favoriteAnimal);
      // Enter Favorite Cake
      element(by.model('user.favoriteCake')).sendKeys(testuser_admin.favoriteCake);
      // Enter Favorite Kids Book
      element(by.model('user.favoriteKidsBook')).sendKeys(testuser_admin.favoriteKidsBook);
      // Enter Favorite Other
      element(by.model('user.favoriteOther')).sendKeys(testuser_admin.favoriteOther);
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Last Name Error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Last name is required.');
    });

    it('Should report missing email address', function () {
      browser.get('http://localhost:3000/settings/profile');
      // Enter First Name
      element(by.model('user.firstName')).sendKeys(testuser_admin.firstName);
      // Enter Last Name
      element(by.model('user.lastName')).sendKeys(testuser_admin.lastName);
      // Enter Username
      element(by.model('user.username')).sendKeys(testuser_admin.username);
      // Enter Favorite Color
      element(by.model('user.favoriteColor')).sendKeys(testuser_admin.favoriteColor);
      // Enter Favorite Animal
      element(by.model('user.favoriteAnimal')).sendKeys(testuser_admin.favoriteAnimal);
      // Enter Favorite Cake
      element(by.model('user.favoriteCake')).sendKeys(testuser_admin.favoriteCake);
      // Enter Favorite Kids Book
      element(by.model('user.favoriteKidsBook')).sendKeys(testuser_admin.favoriteKidsBook);
      // Enter Favorite Other
      element(by.model('user.favoriteOther')).sendKeys(testuser_admin.favoriteOther);
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Email address error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Email address is required.');
    });

    it('Should report invalid email address - "123"', function () {
      browser.get('http://localhost:3000/settings/profile');
      // Enter First Name
      element(by.model('user.firstName')).sendKeys(testuser_admin.firstName);
      // Enter Last Name
      element(by.model('user.lastName')).sendKeys(testuser_admin.lastName);
      // Enter Email
      element(by.model('user.email')).sendKeys('123');
      // Enter Username
      element(by.model('user.username')).sendKeys(testuser_admin.username);
      // Enter Favorite Color
      element(by.model('user.favoriteColor')).sendKeys(testuser_admin.favoriteColor);
      // Enter Favorite Animal
      element(by.model('user.favoriteAnimal')).sendKeys(testuser_admin.favoriteAnimal);
      // Enter Favorite Cake
      element(by.model('user.favoriteCake')).sendKeys(testuser_admin.favoriteCake);
      // Enter Favorite Kids Book
      element(by.model('user.favoriteKidsBook')).sendKeys(testuser_admin.favoriteKidsBook);
      // Enter Favorite Other
      element(by.model('user.favoriteOther')).sendKeys(testuser_admin.favoriteOther);
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Email address error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Email address is invalid.');
    });

     //Note: 123@123 is a valid email adress according to HTML5.
     //However, 123@123@123 is an invalid email address.
    it('Should report invalid email address - "123@123@123"', function () {
      browser.get('http://localhost:3000/settings/profile');
      // Enter First Name
      element(by.model('user.firstName')).sendKeys(testuser_admin.firstName);
      // Enter Last Name
      element(by.model('user.lastName')).sendKeys(testuser_admin.lastName);
      // Enter Email
      element(by.model('user.email')).sendKeys('123@123@123');
      // Enter Username
      element(by.model('user.username')).sendKeys(testuser_admin.username);
      // Enter Favorite Color
      element(by.model('user.favoriteColor')).sendKeys(testuser_admin.favoriteColor);
      // Enter Favorite Animal
      element(by.model('user.favoriteAnimal')).sendKeys(testuser_admin.favoriteAnimal);
      // Enter Favorite Cake
      element(by.model('user.favoriteCake')).sendKeys(testuser_admin.favoriteCake);
      // Enter Favorite Kids Book
      element(by.model('user.favoriteKidsBook')).sendKeys(testuser_admin.favoriteKidsBook);
      // Enter Favorite Other
      element(by.model('user.favoriteOther')).sendKeys(testuser_admin.favoriteOther);
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Email address error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Email address is invalid.');
    });

    it('Should report missing username', function () {
      browser.get('http://localhost:3000/settings/profile');
      // Enter First Name
      element(by.model('user.firstName')).sendKeys(testuser_admin.firstName);
      // Enter Last Name
      element(by.model('user.lastName')).sendKeys(testuser_admin.lastName);
      // Enter Email
      element(by.model('user.email')).sendKeys(testuser_admin.email);
      // Enter Favorite Color
      element(by.model('user.favoriteColor')).sendKeys(testuser_admin.favoriteColor);
      // Enter Favorite Animal
      element(by.model('user.favoriteAnimal')).sendKeys(testuser_admin.favoriteAnimal);
      // Enter Favorite Cake
      element(by.model('user.favoriteCake')).sendKeys(testuser_admin.favoriteCake);
      // Enter Favorite Kids Book
      element(by.model('user.favoriteKidsBook')).sendKeys(testuser_admin.favoriteKidsBook);
      // Enter Favorite Other
      element(by.model('user.favoriteOther')).sendKeys(testuser_admin.favoriteOther);
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Username Error
      expect(element.all(by.css('.error-text')).get(0).getText()).toBe('Username is required.');
    });

    it('Should report Email already exists', function () {
      // Make sure user is signed out first
      signout();
      // Signup
      browser.get('http://localhost:3000/settings/profile');
      // Enter First Name
      element(by.model('user.firstName')).sendKeys(testuser_admin.firstName);
      // Enter Last Name
      element(by.model('user.lastName')).sendKeys(testuser_admin.lastName);
      // Enter Email
      element(by.model('user.email')).sendKeys(user1.email);
      // Enter Username
      element(by.model('user.username')).sendKeys(testuser_admin.username);
      // Enter Favorite Color
      element(by.model('user.favoriteColor')).sendKeys(testuser_admin.favoriteColor);
      // Enter Favorite Animal
      element(by.model('user.favoriteAnimal')).sendKeys(testuser_admin.favoriteAnimal);
      // Enter Favorite Cake
      element(by.model('user.favoriteCake')).sendKeys(testuser_admin.favoriteCake);
      // Enter Favorite Kids Book
      element(by.model('user.favoriteKidsBook')).sendKeys(testuser_admin.favoriteKidsBook);
      // Enter Favorite Other
      element(by.model('user.favoriteOther')).sendKeys(testuser_admin.favoriteOther);
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Password Error
      expect(element.all(by.css('strong')).get(0).getText()).toBe('Email already exists');
    });

    it('Should report Username already exists', function () {
      // Signup
      browser.get('http://localhost:3000/settings/profile');
      // Enter First Name
      element(by.model('user.firstName')).sendKeys(testuser_admin.firstName);
      // Enter Last Name
      element(by.model('user.lastName')).sendKeys(testuser_admin.lastName);
      // Enter Email
      element(by.model('user.email')).sendKeys(testuser_admin.email);
      // Enter Username
      element(by.model('user.username')).sendKeys(user1.username);
      // Enter Favorite Color
      element(by.model('user.favoriteColor')).sendKeys(testuser_admin.favoriteColor);
      // Enter Favorite Animal
      element(by.model('user.favoriteAnimal')).sendKeys(testuser_admin.favoriteAnimal);
      // Enter Favorite Cake
      element(by.model('user.favoriteCake')).sendKeys(testuser_admin.favoriteCake);
      // Enter Favorite Kids Book
      element(by.model('user.favoriteKidsBook')).sendKeys(testuser_admin.favoriteKidsBook);
      // Enter Favorite Other
      element(by.model('user.favoriteOther')).sendKeys(testuser_admin.favoriteOther);
      // Click Submit button
      element(by.css('button[type=submit]')).click();
      // Password Error
      expect(element.all(by.css('strong')).get(0).getText()).toBe('Username already exists');
    });

  });
*/

});
