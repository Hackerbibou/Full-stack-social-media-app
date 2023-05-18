const { ObjectId } = require('mongodb')
const Posts = require('../models/posts')
const Users = require('../models/user')

module.exports = {
    index,
    show,
    newPost,
    edit,
    create,
    update,
    remove,
    oProfile
}


function index(req, res, next){
    Posts.find({user:req.user._id})
    .then(post=>{
        Users.find({})
        .then(use=>res.render('profile/index',{Posts:post.reverse(), user:req.user, Users:use, title:'profile'}))
        .catch(next)
        
    })
    .catch(next)
}
function oProfile(req, res, next){
    Posts.find({user:new ObjectId(req.params.id)})
    .then(post=>{
        Users.find({})
        .then(use=>res.render('profile/profile',{Posts:post.reverse(), user:req.user, Users:use, title:'profile', id:req.params.id}))
        .catch(next)
        
    })
    .catch(next)
}

function show(req, res, next){
    Posts.findById(req.params.postId)
    .then(post=>{
        Users.find({})
        .then(use=>{
        
            res.render('posts/show',{Posts:post.reverse(), title:'Post',Users:use,user:req.user})
        })
        .catch(next)
        
    })
    .catch(next)
}
function newPost(req, res){
    res.render('posts/new',{user:req.user, title:'New post'})
}
function create(req, res, next){
    req.body.user=req.user._id
    Posts.create(req.body)
    .then(post=>{
        res.redirect('/profile')
    })
    .catch(next)
}
function edit(req, res, next){
    Posts.findById(req.params.id)
    .then(post=>{
       res.render('posts/edit',{post:post}) 
    })
    .catch(next)
    
}

function update(req, res){
    Posts.findById(req.params.id).updateOne(req.body)
    .then(post=>{
        res.redirect(`/${req.params.id}`)
    })
    .catch(next)
}
function remove(req, res){
    Posts.findById(req.params.id).deleteOne()
    .then(post=>{
        res.redirect(`/profile`)
    })
    .catch(next)
}