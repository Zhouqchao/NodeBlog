var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Category = mongoose.model('Category'),
  Post = mongoose.model('Post');

module.exports = function (app) {
  app.use('/posts', router);
};

router.get('/', function (req, res, next) {
  // Post.find(function (err, posts) {
  Post.find({published:true})
  .sort('created')
  .populate('author')
  .populate('category')
  .exec(function(err,posts){
      if (err) return next(err);
      //实现翻页功能
      var pageNum = Math.abs(parseInt(req.query.page || 1,10));//当前页
      var pageSize = 10;//每页显示文章数
      var totalCount = posts.length;//文章总数
      var pageCount = Math.ceil(totalCount / pageSize);//总页数
      //如果输入的请求页超出文章总页数，则显示最后一页
      if(pageNum > pageCount){
        pageNum = pageCount;
      }
      res.render('blog/index', {
        // posts: posts,
        posts:posts.slice((pageNum - 1) * pageSize, pageNum * pageSize),
        pageNum: pageNum,
        pageCount:pageCount,
        pretty:true
      });
    });
});

//分类路由
router.get('/category/:name', function(req,res,next){
  Category.findOne({name:req.params.name}).exec(function(err,category){
    if(err){
      return next(err);
    }
    Post.find({category:category,published:true})
          .sort('created')
          .populate('author')
          .populate('category')
          .exec(function(err, posts){
            if(err){
              return next(err);
            }
            res.render('blog/category',{
              posts: posts,
              category:category,
              pretty: true
            })
          })
  })
})
router.get('/view', function (req, res, next) {

});
router.get('/comment', function (req, res, next) {

});
router.get('/favourite', function (req, res, next) {

});
