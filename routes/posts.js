var express = require('express');
var router = express.Router();
const postController = require('../controllers/posts')
/* GET users listing. */
router.get('/',postController.index);
router.get('/new',postController.newPost);
router.get('/:postId',postController.show);
router.get('/:postId/edit',postController.edit);
router.post('/',postController.create);
router.put('/:postId',postController.update);
router.delete('/:postId',postController.remove);




module.exports = router;
