var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  //请求首页默认响应文章页
  res.redirect('/posts');
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
