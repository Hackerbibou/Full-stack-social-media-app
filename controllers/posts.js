const Posts = require('../models/posts');
const Users = require('../models/user');

module.exports = {
  index,
  show,
  newPost,
  edit,
  create,
  update,
  remove,
};

function index(req, res, next) {
  Posts.find({})
    .then((post) => {
      res.render('index', { Posts: post, user: req.user });
    })
    .catch(next);
}
function show(req, res, next) {
  Posts.findById(req.params.postId)
    .then((post) => {
      Users.find({})
        .then((use) => {
          res.render('posts/show', {
            Posts: post,
            title: 'Post',
            Users: use,
            user: req.user,
          });
        })
        .catch(next);
    })
    .catch(next);
}
function newPost(req, res, next) {
  Users.find({})
    .then((use) =>
      res.render('posts/new', {
        user: req.user,
        title: 'New post',
        Users: use,
      }),
    )
    .catch(next);
}
function create(req, res, next) {
  req.body.user = req.user._id;
  Posts.create(req.body)
    .then((post) => {
      res.redirect('/');
    })
    .catch(next);
}
function edit(req, res, next) {
  Posts.findById(req.params.postId)
    .then((post) => {
      Users.find({})
      .then(use=>{
        res.render('posts/edit', { post: post, title:'edit', Users:use });
      })
      .catch(next)
    })
    .catch(next);
}

function update(req, res, next) {
  Posts.findById(req.params.postId)
    .updateOne(req.body)
    .then((post) => {
      res.redirect(`/posts/${req.params.postId}`);
    })
    .catch(next);
}
function remove(req, res,next) {
  Posts.findById(req.params.postId)
    .deleteOne()
    .then((post) => {
      res.redirect('/profile');
    })
    .catch(next);
}
