var express = require('express');
var router = express.Router();
const passport = require('passport')
const PostMalone = require('../models/posts')
const Users = require('../models/user')


router.get('/', function(req, res, next) {


  PostMalone.find({})
    .then(post=>{
      Users.find({})
      .then(use=>{
        res.render('index',{
          Posts:post.reverse(), 
          user:req.user, 
          title:'Codify',
          Users:use,
          editfunct:()=>{console.log('reach it')}
        
        })
      })
      .catch(next)
    })
    .catch(next)
		})


router.get('/auth/google', passport.authenticate(
  'google', 
  { scope: ['profile', 'email'] }
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
))

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/')
  })
})

module.exports = router;
