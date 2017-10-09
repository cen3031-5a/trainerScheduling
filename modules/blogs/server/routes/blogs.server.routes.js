'use strict';

/**
 * Module dependencies
 */
var blogsPolicy = require('../policies/blogs.server.policy'),
  blogs = require('../controllers/blogs.server.controller');

module.exports = function(app) {
  // Blogs Routes
  app.route('/api/blogs').all(blogsPolicy.isAllowed)
    .get(blogs.list)
    .post(blogs.create);

  app.route('/api/blogs/:blogId').all(blogsPolicy.isAllowed)
    .get(blogs.read)
    .put(blogs.update)
    .delete(blogs.delete);

  // Finish by binding the Blog middleware
  app.param('blogId', blogs.blogByID);
};
