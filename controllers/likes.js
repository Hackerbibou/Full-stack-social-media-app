const Posts = require('../models/posts');
module.exports = {
  createLp,
  createLp1,
  createLc,
};

function createLp(req, res, next) {
    console.log("can get here")
  Posts.findById(req.params.postId)
    .then((post) => {
      if (!(post.likes.includes(req.user._id))) {
        req.body.user = req.user.id;
        post.likes.push(req.user.id);
        post.save();
        res.redirect(`/posts/${req.params.postId}`);
      }
      else{
        post.likes.splice(
            post.likes.findIndex((elem) => elem == req.user.id),
            1,
          );
          post.save();
          res.redirect(`/posts/${req.params.postId}`);
      }
    })
    .catch(next);
}

function createLp1(req, res, next) {
    console.log("can get here")
  Posts.findById(req.params.postId)
    .then((post) => {
      if (!(post.likes.includes(req.user._id))) {
        req.body.user = req.user.id;
        post.likes.push(req.user.id);
        post.save();
        res.redirect(`/`);
      }
      else{
        post.likes.splice(
            post.likes.findIndex((elem) => elem == req.user.id),
            1,
          );
          post.save();
          res.redirect(`/`);
      }
    })
    .catch(next);
}
function createLc(req, res, next) {
   
  Posts.findById(req.params.postId)
    .then((post) => {
      post.comments.forEach((elem) => {
       
        if (elem._id == req.params.commentId) { 
            if (!(elem.likes.includes(req.user._id))) {
                elem.likes.push(req.user.id);
                post.save();
                res.redirect(`/posts/${req.params.postId}`);
              }
              else{
                elem.likes.splice(
                    elem.likes.findIndex((elem) => elem == req.user.id),
                    1,
                  );
                  post.save();
                  res.redirect(`/posts/${req.params.postId}`);
              }
        }
      });
    })
    .catch(next);
}