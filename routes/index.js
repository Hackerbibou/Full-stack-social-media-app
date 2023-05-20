var express = require('express');
var router = express.Router();
const passport = require('passport')
const PostMalone = require('../models/posts')
const Users = require('../models/user')
const exclusive = ["6467eea4b1d1fdf3493128f8" , "6467820d2223481af8dc8933", "64629b664b778bd36b0aaea7" , "6468208f2607f3d8ed0d3746"]

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
          , exclusive: exclusive
        
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
