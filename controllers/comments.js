const Posts= require('../models/posts')
module.exports={
    create,
}

function create(req, res, next){
    Posts.findById(req.params.postId)
    .then(post=>{
        req.body.user=req.user.id
        post.comments.push(req.body)
        post.save()
        res.redirect(`/posts/${req.params.postId}`)
    })
    .catch(next)
}

