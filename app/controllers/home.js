var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Post = mongoose.model('Post');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  // Post.find(function (err, posts) {
  Post.find().populate('author').populate('category').exec(function(err,posts){
    if (err) return next(err);
    res.render('blog/index', {
      title: 'Node Blog',
      posts: posts,
      pretty:true
    });
  });
});
router.get('/about', function (req, res, next) {
    res.render('blog/index', {
      title: 'about me',
      pretty:true
    });
});
router.get('/contact', function (req, res, next) {
    res.render('blog/index', {
      title: 'contact me',
      pretty:true
    });
});
