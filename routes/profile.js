var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profile')
/* GET users listing. */
router.get('/',profileController.index);
router.get('/new',profileController.newPost);
router.get('/others/:id',profileController.oProfile);
router.get('/:postId',profileController.show);
router.get('/:postId/edit',profileController.edit);
router.post('/',profileController.create);
router.put('/:postId',profileController.update);
router.delete('/:postId',profileController.remove);

module.exports = router;
