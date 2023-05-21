var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profile')
const users = require('../models/user');
const user = require('../models/user');
/* GET users listing. */
router.get('/',profileController.index);
router.get('/new',profileController.newPost);
router.get('/others/:id',profileController.oProfile);
router.get('/:postId',profileController.show);
router.get('/:postId/edit',profileController.edit);
router.post('/',profileController.create);

router.put('/appearance',(req,res, next)=>{
    if(req.user.appearance=='login'){
        users.find({_id:req.user._id}).updateOne({appearance:'login2'})
        .then(user=>{
            res.redirect('/')
        })
        .catch(next)
    }
    else{
        users.find({_id:req.user._id}).updateOne({appearance:'login'})
        .then(user=>{
            res.redirect('/')
        })
        .catch(next)
    }

    
});
router.put('/appearance/profile',(req,res, next)=>{
    if(req.user.appearance=='login'){
        users.find({_id:req.user._id}).updateOne({appearance:'login2'})
        .then(user=>{
            res.redirect('/profile')
        })
        .catch(next)
    }
    else{
        users.find({_id:req.user._id}).updateOne({appearance:'login'})
        .then(user=>{
            res.redirect('/profile')
        })
        .catch(next)
    }

    
});
router.put('/:postId',profileController.update);
router.delete('/:postId',profileController.remove);

module.exports = router;
